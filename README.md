# Smart-farm
🚜🌾스마트 농장 시스템

## 작품 개요
우리 인간은 과거에는 농작물을 수확하기 위해서 **많은 노동력을 필요**로 하였고 **날씨의 영향**을 크게 받아서 그 해의 농작물이 흉작인 경우도 많이 있었다.  
이 때문에 **자동 농작물 관리 시스템**을 고안하게 되었고 이를 통해서 인력 또한 최소한으로 줄이고 날씨는 여전히 바꿀 순 없지만  IoT 기술의 여러 센서들을 통해서 농작물 주변의 환경 상태를 확인하고 농작물이 잘 자랄 수 있는 환경을 조성해주어 농작물이 잘 자랄 수 있도록 해주는 효율적인 시스템이다.  
또한 외부에서 침입하고자할 때에는 **경고를 표출**하여 즉시 관리자가 확인할 수 있도록 제작하였다.  
나의 농작물을 라즈베리파이와 온습도 센서, 조도 센서, 초음파 센서를 이용하여 **농작물 주변의 성장 환경을 모니터링** 하고 온도가 적절하지 못하면 쿨링 팬을 통해 조절하고, 습도가 적절하지 못하면 가습기를 이용하여 조절해주고, 조도가 적절치 못하면 LED(조명)을 통해 밝기를 맞추어주고, 누군가가 침입하고자 한다면 LED(경고등)을 통해서 경고를 보내주도록 제작하였다.

## 시스템 구조
![코드 구성](https://github.com/chohs4164/SmartFarm/assets/138971722/f95debe2-adf2-4078-8f86-9609363a8c5d)
![하드웨어 구조](https://github.com/chohs4164/SmartFarm/assets/138971722/bc11bb0c-11da-4e37-8d94-1e1069e1eca1)

## 하드웨어 구성
라즈베리파이와 아두이노 1개 온습도 센서 1개, 조도 센서 1개, 초음파 센서 1개, 쿨링 팬 1개, LED 2개, 가습기 모듈 1개를 연결하여 사용한다.  
센서를 통해서 측정된 데이터 값들은 PC의 웹페이지를 통해서 차트로 표현하여 실시간으로 볼 수 있도록 구현하였다.

![하드웨어 구성](https://github.com/chohs4164/SmartFarm/assets/138971722/0c427c10-bee6-4dd3-9744-511c28274a7d)

## 실행 과정 및 결과
> 초기 웹 화면

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/8f41355f-bc19-4e3c-bcb8-6e523408e5fa)

> 브로커의 IP를 입력하고 연결하기 버튼을 눌렀을 경우

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/954efb42-96d3-467c-94a5-2a81d52e929e)

## 가정 상황
### 1.1 밝기가 부족한 경우  
> LED(조명)가 켜져 있게 된다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/44ef51a4-1173-4b41-8992-10564aa4cc9b)

### 1.2 밝기가 충분한 경우  
> LED(조명)이 꺼지게 된다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/40ba860b-0d8e-4e48-af32-0fe2ffbdc4ca)

### 2.1 농작물 근처에 아무것도 없는 경우  
> 경고 LED를 꺼준다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/2200fe1d-47c5-4836-9658-631c655b4d14)

### 2.2 침입자가 발생한 경우  
> 경고 LED를 켜준다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/05661254-5690-45ea-90f8-3d5f2c75f3e6)

### 3.1 온도가 27도 이하로 농작물 주변의 온도가 적절한 경우  
> 쿨링 팬이 작동하지 않는다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/98fb500c-1616-47b4-bc56-208e26801738)

### 3.2 온도가 27도 이상으로 농작물 주변의 온도가 높은 경우  
> 쿨링 팬이 작동하게 된다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/b37c391c-d773-43ec-b3c6-16cc4e66a57e)

### 4.1 습도가 40%이상으로 적절한 상태인 경우  
> 가습기가 작동하지 않는다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/f5723d44-5d50-4597-a0c9-a1b5a7f1a9fd)

### 4.2 습도가 40%이하로 낮은 경우  
> 가습기가 작동하여 농작물 주변의 습도를 높여준다.

![image](https://github.com/chohs4164/SmartFarm/assets/138971722/2a0867a9-09c6-4a01-8b66-74e6911a7451)

