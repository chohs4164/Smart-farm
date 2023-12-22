# Smart-farm
🚜🌾스마트 농장 시스템

## 작품 개요
우리 인간은 과거에는 농작물을 수확하기 위해서 **많은 노동력을 필요**로 하였고 **날씨의 영향**을 크게 받아서 그 해의 농작물이 흉작인 경우도 많이 있었다.  
이 때문에 **자동 농작물 관리 시스템**을 고안하게 되었고 이를 통해서 인력 또한 최소한으로 줄이고 날씨는 여전히 바꿀 순 없지만  IoT 기술의 여러 센서들을 통해서 농작물 주변의 환경 상태를 확인하고 농작물이 잘 자랄 수 있는 환경을 조성해주어 농작물이 잘 자랄 수 있도록 해주는 효율적인 시스템이다.  
또한 외부에서 침입하고자할 때에는 **경고를 표출**하여 즉시 관리자가 확인할 수 있도록 제작하였다.  
나의 농작물을 라즈베리파이와 온습도 센서, 조도 센서, 초음파 센서를 이용하여 **농작물 주변의 성장 환경을 모니터링** 하고 온도가 적절하지 못하면 선풍기를 통해 조절하고, 습도가 적절하지 못하면 가습기를 이용하여 조절해주고, 조도가 적절치 못하면 LED(조명)을 통해 밝기를 맞추어주고, 누군가가 침입하고자 한다면 LED(경고등)을 통해서 경고를 보내주도록 제작하였다.

## 시스템 구조
![코드 구성](https://github.com/chohs4164/Smart-farm/assets/138971722/d0c81e20-5cc9-45dc-bbcb-dac424358cc2)
![하드웨어 구조](https://github.com/chohs4164/Smart-farm/assets/138971722/e5ab2d5a-b7c0-4355-83d5-49ae8e269c7d)


## 하드웨어 구성
라즈베리파이와 아두이노 1개 온습도 센서 1개, 조도 센서 1개, 초음파 센서 1개, 선풍기 모듈 1개, LED 2개, 가습기 모듈 1개를 연결하여 사용한다.  
센서를 통해서 측정된 데이터 값들은 PC의 웹페이지를 통해서 차트로 표현하여 실시간으로 볼 수 있도록 구현하였다.

![하드웨어 구성](https://github.com/chohs4164/Smart-farm/assets/138971722/499e8205-2a75-40d4-8ceb-102f08561701)


## 실행 과정 및 결과
> 초기 웹 화면

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/889fdf2a-c533-4c6b-9031-a511b2704ee0)


> 브로커의 IP를 입력하고 연결하기 버튼을 눌렀을 경우

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/1301db9f-8f00-4e37-9ac8-30cfdb19601e)


## 가정 상황
### 1.1 밝기가 부족한 경우  
> LED(조명)가 켜져 있게 된다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/5892f305-bfe6-4572-8496-4fed0ba2e14d)



### 1.2 밝기가 충분한 경우  
> LED(조명)이 꺼지게 된다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/68e32922-6aa0-41f5-8b4a-99ea739a89ee)


### 2.1 농작물 근처에 아무것도 없는 경우  
> 경고 LED를 꺼준다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/17624db4-bd57-4802-a4d1-9b353cdda101)


### 2.2 침입자가 발생한 경우  
> 경고 LED를 켜준다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/550b6e6d-978e-4295-9f3a-21dd30451494)


### 3.1 온도가 27도 이하로 농작물 주변의 온도가 적절한 경우  
> 선풍기가 작동하지 않는다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/d3bbe750-dffd-429c-bcfa-d6c125ba6ea7)


### 3.2 온도가 27도 이상으로 농작물 주변의 온도가 높은 경우  
> 선풍기가 작동하며 농작물 주변의 온도를 낮추어 준다..

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/219e2465-dddd-42b6-85c9-0401368fb1f4)

### 4.1 습도가 40%이상으로 적절한 상태인 경우  
> 가습기가 작동하지 않는다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/842c3225-80ec-44e9-b196-90f67914af97)


### 4.2 습도가 40%이하로 낮은 경우  
> 가습기가 작동하여 농작물 주변의 습도를 높여준다.

![image](https://github.com/chohs4164/Smart-farm/assets/138971722/cef58e80-d25f-4dae-88b5-48ac8b2d9ff3)


