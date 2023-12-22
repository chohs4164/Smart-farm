# fan_control.py

import RPi.GPIO as GPIO
import time

ina_pin = 24  # 정방향으로 돌아가는 GPIO는 24
inb_pin = 23  # 역방향으로 돌아가는 GPIO는 23

GPIO.setmode(GPIO.BCM)  # BCM모드로 GPIO를 사용
GPIO.setwarnings(False)  # 다른 프로그램이 동일한 핀을 사용하여도 경고 메시지 표출 X
GPIO.setup(ina_pin, GPIO.OUT)
GPIO.setup(inb_pin, GPIO.OUT)

fan_status = False # 선풍기 상태를 저장하는 변수, 초기값은 꺼진 상태

def forward():
    GPIO.output(ina_pin, 1) # 정방향 활성화
    GPIO.output(inb_pin, 0) # 역방향 비활성화
    global fan_status
    fan_status = True # 선풍기가 작동 중임을 표시

def backward():
    GPIO.output(ina_pin, 0) # 정방향 비활성화
    GPIO.output(inb_pin, 1) # 역방향 활성화
    global fan_status
    fan_status = False # 선풍기가 작동 중이 아님을 표시

def stop():
    GPIO.output(ina_pin, 0) # 정방향 비활성화
    GPIO.output(inb_pin, 0) # 역방향 비활성화

if __name__=="__main__": //단독으로 실행한다면 정방향으로 선풍기 활성화
        while(True):
                forward()