# lumin.py

import time
import RPi.GPIO as GPIO
import Adafruit_MCP3008

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

prev_luminous = 0 # 이전 조도 센서 값 초기화

mcp = Adafruit_MCP3008.MCP3008(clk=11, cs=8, miso=9, mosi=10)

def getlumin():
        global prev_luminous

        luminous = mcp.read_adc(0)

        prev_luminous = luminous
        return luminous