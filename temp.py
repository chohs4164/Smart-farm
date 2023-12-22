# temp.py

import time
import RPi.GPIO as GPIO
from adafruit_htu21d import HTU21D
import busio

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
sda = 2 # GPIO핀 sda 이름이 붙여진 핀
scl = 3 # GPIO핀 scl 이름이 붙여진 핀

prev_temperature = 0

i2c = busio.I2C(scl,sda) # I2C 버스 통신을 실행하는 객체 생성
sensor = HTU21D(i2c) # I2C 버스에서 HTU21D 장치를 제어하는 객체 리턴

def getTemperature(sensor): # 센서로부터 온도 값 수신 함수
        global prev_temperature
        temperature = float(sensor.temperature) # HTU21D 장치로부터 온도 값 읽기
        prev_temperature = temperature
        return temperature                                                            