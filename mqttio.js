// mqttio.js
let client = null; // MQTT 클라이언트의 역할을 하는 Client 객체를 가리키는 전역변수
let connectionFlag = false; // 연결 상태이면 true
const CLIENT_ID = "client-"+Math.floor((1+Math.random())*0x10000000000).toString(16) // 사용자 ID 랜덤 생성

function startConnect(){ //브로커에 접속하는 함수
    if(connectionFlag == true)
        return; // 현재 연결 상태이므로 다시 연결하지 않음

    // 사용자가 입력한 브로커의 IP 주소 알아내기
      let broker = document.getElementById("broker").value; // 브로커의 IP 주소
      let port = document.getElementById("port").value; // 브로커의 포트 번호

      // id가 message인 DIV 객체에 브로커의 IP와 포트 번호 출력
      document.getElementById("messages").innerHTML += '<span>ip:'+broker+'접속 성공!</span></br>';

      // MQTT 메시지 전송 기능을 모두 가진 Paho client 객체 생성
      client = new Paho.MQTT.Client(broker, Number(port), CLIENT_ID);

    // client 객체에 콜백 함수 등록 및 연결
      client.onConnectionLost = onConnectionLost; // 접속 끊김 시 onConnectLost() 실행
      client.onMessageArrived = onMessageArrived; // 메시지 도착 시 onMessageArrived() 실행
    // client 객체에게 브로커에 접속 지시
      client.connect({
        onSuccess:onConnect, // 브로커로부터 접속 응답 시 onConnect() 실행
      });
}


// 브로커로부터 접속 성공 응답을 받을 때 호출되는 함수
function onConnect() {
        let topicsInput = document.getElementById('topics').value; // 사용자가 입력한 토픽 문자>>열
        let topics = topicsInput.split(',').map(function(topic){return topic.trim();});
        topics.forEach(function(topic){client.subscribe(topic);

        document.getElementById("messages").innerHTML += '<span>구독신청: 토픽 ' + topic + '</span><br/>';
        });
        connectionFlag = true; // 연결 상태로 설정
}

// 접속이 끊어졌을 때 호출되는 함수
function onConnectionLost(responseObject){ // responseObject는 응답 패킷
    if(responseObject.errorCode!==0){
        document.getElementById("messages").innerHTML += '<span>오류:'+responseObject.errorMessage+'</span><br>';
    }
    connectionFlag = false; // 연결 되지 않은 상태로 설정
}

function subscribe(topic) {
        if(connectionFlag != true) { // 연결되지 않은 경우
                alert("연결되지 않았음");
                return false;
        }

        // 구독 신청하였음을 <div> 영역에 출력
        document.getElementById("messages").innerHTML += '<span>구독신청: 토픽 ' + topic + '</span><br/>';
        client.subscribe(topic); // 브로커에 구독 신청
}

function publish(topic, msg) {
        if(connectionFlag != true) { // 연결되지 않은 경우
                alert("연결되지 않았음");
                return false;
        }
        client.send(topic, msg, 0, false);
        return true;
}

function unsubscribe(topic) {
        if(connectionFlag != true) return; // 연결되지 않은 경우
        // 구독 신청 취소를 <div> 영역에 출력
        document.getElementById("messages").innerHTML += '<span>구독신청취소: 토픽 '
                                        + topic + '</span><br/>';
        client.unsubscribe(topic, null); // 브로커에 구독 신청 취소
}

// 메시지가 도착할 때 호출되는 함수
let onSensorDataReceivedCallback = null; // 센서 데이터 수신 시 호출할 콜백 함수


function onMessageArrived(msg) {
    console.log("onMessageArrived: " + msg.payloadString);

    switch (msg.destinationName) {
        case "ultrasonic": //초음파 센서 측정값인 경우
            addChart1Data(parseFloat(msg.payloadString));
            break;
        case "temp": //온도 센서 측정값인 경우
            addChart2Data(parseFloat(msg.payloadString));
            break;
        case "humid": //습도 센서 측정값인 경우
            addChart3Data(parseFloat(msg.payloadString));
            break;
        case "lumin": //조도 센서 측정값인 경우
            addChart4Data(parseFloat(msg.payloadString));
            break;
        default: //이상한 값이 들어왔을 경우
            console.log("Unknown destinationName: " + msg.destinationName);
    }
}

function startDisconnect(){
    if(connectionFlag == false)
                return; // 연결 되지 않은 상태이면 그냥 리턴
        client.disconnect(); // 브로커와 접속 해제
        document.getElementById("messages").innerHTML += '<span>연결종료</span><br/>';
        connectionFlag = false; // 연결 되지 않은 상태로 설정
}
