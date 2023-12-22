# led.py

import time # 시간관련 메소드를 사용하기 위해서
import RPi.GPIO as GPIO # GPIO에 연결된 장치들을 제어하기 위해서

GPIO.setmode(GPIO.BCM) # BCM모드로 GPIO를 사용
GPIO.setwarnings(False) # 다른 프로그램이 동일한 핀을 사용하여도 경고 메시지 표출 X

def setInOut(pin, in_out): # 전류를 흘려보낼 GPIO 핀 값과 출력/입력 설정
        if in_out == "in":
                GPIO.setup(pin, GPIO.IN)
        if in_out == "out":
                GPIO.setup(pin, GPIO.OUT)

# pin에 연결된 LED에 value(0/1) 값을 출력하여 LED를 켜거나 끄는 함수
def led_on_off(pin,value):
        setInOut(pin,"out")
        GPIO.output(pin,value)