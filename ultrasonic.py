# ultrasonic.py

import time # 시간관련 메소드를 사용하기 위해서
import RPi.GPIO as GPIO # GPIO에 연결된 장치들을 제어하기 위해서
trig = 20 # 초음파를 발사하는 GPIO는 20
echo = 16 # 되돌아온 초음파의 수신을 알리는 GPIO는 16

GPIO.setmode(GPIO.BCM) # BCM모드로 GPIO를 사용
GPIO.setwarnings(False) # 다른 프로그램이 동일한 핀을 사용하여도 경고 메시지 표출 X

GPIO.setup(trig, GPIO.OUT) # trig을 출력으로
GPIO.setup(echo, GPIO.IN) # echo을 입력으로

prev_ultrasonic = 0

def measureDistance():
        global trig, echo,prev_ultrasonic
        GPIO.output(trig,1) # tr 핀 신호를 High 상태로
        GPIO.output(trig,0) # trig 핀 신호 High->Low. 초음파 발사 지시
        while(GPIO.input(echo) == 0): # echo 핀 값이 1로 바뀔때까지 루프
                pass
        # echo 핀 값이 1이면 초음파가 발사되었음
        pulse_start = time.time() # 초음파 발사 시간 기록
        while(GPIO.input(echo)==1): # echo 핀 값이 0으로 바뀔때까지 루프
                pass
        # echo 핀 값이 0이 되면 초음파 수신하였음
        pulse_end = time.time() # 초음파가 되돌아 온 시간 기록
        pulse_duration = pulse_end - pulse_start # 경과 시간 계산
        distance = pulse_duration * 340 * 100/2
        prev_ultrasonic  = distance # 이전 초음파 값 업데이트
        return distance # 거리를 계산하여 리턴(단위 cm)