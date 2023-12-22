# mqtt.py

import paho.mqtt.client as mqtt
import time
from PIL import Image,ImageFilter
import RPi.GPIO as GPIO
import ultrasonic
import temp
import humid
import lumin
import fan_control
import humidifier_control
import led
import app
from flask import Flask,render_template,url_for

ip = "localhost" # 현재 브로커는 이 컴퓨터에 설치되어 있음

client=mqtt.Client()
client.connect(ip,1883) # 브로커에 연결

client.loop_start() # 메시지 루프를 실행하는 스레드 생성


while True:
        distance = ultrasonic.measureDistance() # 초음파 센서로부터 거리 측정
        client.publish("ultrasonic",distance,qos=0) # "ultrasonic" 토픽으로 거리 전송
        time.sleep(0.2) # 0.2초의 딜레이

        if distance>=10: # 거리가 10센치 이상이라면
                led.led_on_off(6,0) # 빨간 led를 꺼준다.

        if distance<10: # 거리가 10센치 이하라면
                led.led_on_off(6,1) # 빨간 led를 켜준다.

        temperature = temp.getTemperature(temp.sensor) # 온습도 센서로부터 온도 측정
        client.publish("temp",temperature,qos=0) # "temp" 토픽으로 온도 전송
        time.sleep(0.2) # 0.2초 딜레이

        if temperature>=27: # 온도가 27도 이상으로 올라간다면
                fan_control.forward() # 선풍기 작동
        elif temperature<27: # 온도가 27 미만으로 내려간다면
                fan_control.stop() # 선풍기 중지

        humidity = humid.getHumidity(humid.sensor) # 온습도 센서로부터 습도 측정
        client.publish("humid",humidity,qos=0) # "humid" 토픽으로 습도 전송
        time.sleep(0.2) # 0.2초 딜레이

        if humidity>=40: # 습도가 40% 이상이라면
                print("현재 습도:%d.가습기를 꺼줍니다."%humidity)
                humidifier_control.run(humidity,0) # 가습기 작동 중지 코드
        if humidity<40: # 습도가 40% 미만이라면
                print("현재 습도:%d.가습기를 켜줍니다,"%humidity)
                humidifier_control.run(humidity,1) # 가습기 작동 코드

        luminous=lumin.getlumin() # 조도 센서로부터 조도 측정
        client.publish("lumin",luminous,qos=0) # "lumin" 토픽으로 조도 전송
        time.sleep(0.2) # 0.2초 딜레이
       
        if luminous>=400: # 조도가 400 이상이라면
                led.led_on_off(21,0) # led 끄는 코드
        if luminous<400: # 조도가 400 미만이라면
                led.led_on_off(21,1) # led 켜는 코드

GPIO.cleanup() # GPIO 객체 해제
client.loop.stop() # 메시지 루프를 실행하는 스레드 종료
client.disconnect() # MQTT 객체 해제

