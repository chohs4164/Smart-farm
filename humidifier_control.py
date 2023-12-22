# humidifier_control.py

import time
import serial

ser = serial.Serial('/dev/ttyACM0', 9600)  # USB 포트를 통해 연결된 라즈베리파이와 아두이노 시리얼 통신

def run(humidity,on_off):
        message = f"{humidity}\n"
        ser.write(message.encode('utf-8'))