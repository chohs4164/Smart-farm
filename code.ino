const int humidifierPin = 2;  // 가습기 모듈 핀 번호

void setup() {
  Serial.begin(9600);
  pinMode(humidifierPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    int humidity = input.toInt();  // 시리얼로부터 습도 값 수신

    Serial.print("Received humidity value: ");
    Serial.println(humidity);

    if (humidity <= 40) {
      digitalWrite(humidifierPin, HIGH);  // 습도가 40 이하이면 가습기를 켬
      Serial.println("가습기를 작동합니다.");
    } else {
      digitalWrite(humidifierPin, LOW);  // 습도가 40 초과이면 가습기를 끔
      Serial.println("가습기를 중지합니다.");
    }
  }
  delay(1000);  // 1초 대기
}
