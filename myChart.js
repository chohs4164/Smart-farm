let ctx1 = null;
let chart1 = null;
let config1 = {
        type: 'line',
        data: {
            labels:[],
            datasets:[{
                label: '초음파 센서로부터 측정된 실시간 거리',
                backgroundColor:'black',
                borderColor:'green',
                borderWidth:2,
                data:[],
                fill:false,
            }]
        },
        options: {
            responsive:false,
            scales:{
                xAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'시간(초)'},
                }],
                yAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'거리(cm)'}
                }]
            }
        }
};

let ctx2 = null;
let chart2 = null;
let config2 = {
        type: 'line',
        data: {
            labels:[],
            datasets:[{
                label: '온도 센서로부터 측정된 실시간 온도',
                backgroundColor:'black',
                borderColor:'red',
                borderWidth:2,
                data:[],
                fill:false,
            }]
        },
        options: {
            responsive:false,
            scales:{
                xAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'시간(초)'},
                }],
                yAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'온도(*C)'}
                }]
            }
        }
};

let ctx3 = null;
let chart3 = null;
let config3 = {
        type: 'line',
        data: {
            labels:[],
            datasets:[{
                label: '습도 센서로부터 측정된 실시간 습도',
                backgroundColor:'black',
                borderColor:'blue',
                borderWidth:2,
                data:[],
                fill:false,
            }]
        },
        options: {
            responsive:false,
            scales:{
                xAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'시간(초)'},
                }],
                yAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'습도(%)'}
                }]
            }
        }
};

let ctx4 = null;
let chart4 = null;
let config4 = {
        type: 'line',
        data: {
            labels:[],
            datasets:[{
                label: '조도 센서로부터 측정된 실시간 밝기(lux)',
                backgroundColor:'black',
                borderColor:'yellow',
                borderWidth:2,
                data:[],
                fill:false,
            }]
        },
        options: {
            responsive:false,
            scales:{
                xAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'시간(초)'},
                }],
                yAxes:[{
                    display:true,
                    scaleLabel:{display:true,labelString:'조도(lux)'}
                }]
            }
        }
};

let LABEL_SIZE1 = 20; // 차트에 그려지는 데이터의 개수
let tick1 = 0; // 도착한 데이터의 개수임, tick의 범위는 0에서 99까지만

let LABEL_SIZE2 = 20; // 차트에 그려지는 데이터의 개수
let tick2 = 0; // 도착한 데이터의 개수임, tick의 범위는 0에서 99까지만

let LABEL_SIZE3 = 20; // 차트에 그려지는 데이터의 개수
let tick3 = 0; // 도착한 데이터의 개수임, tick의 범위는 0에서 99까지만

let LABEL_SIZE4 = 20; // 차트에 그려지는 데이터의 개수
let tick4 = 0; // 도착한 데이터의 개수임, tick의 범위는 0에서 99까지만




function drawChart1() {
        ctx1 = document.getElementById('canvas1').getContext('2d');
        chart1 = new Chart(ctx1, config1);
        init1();
}

function drawChart2() {
        ctx2 = document.getElementById('canvas2').getContext('2d');
        chart2 = new Chart(ctx2, config2);
        init2();
}

function drawChart3() {
        ctx3 = document.getElementById('canvas3').getContext('2d');
        chart3 = new Chart(ctx3, config3);
        init3();
}

function drawChart4() {
        ctx4 = document.getElementById('canvas4').getContext('2d');
        chart4 = new Chart(ctx4, config4);
        init4();
}




function init1() { // chart1.data.labels의 크기를 LABEL_SIZE로 만들고 0~19까지 레이블 붙이기
        for(let i=0; i<LABEL_SIZE1; i++) {
                chart1.data.labels[i] = i;
        }
        chart1.update();
}

function init2() { // chart2.data.labels의 크기를 LABEL_SIZE로 만들고 0~19까지 레이블 붙이기
        for(let i=0; i<LABEL_SIZE2; i++) {
                chart2.data.labels[i] = i;
        }
        chart2.update();
}

function init3() { // chart3.data.labels의 크기를 LABEL_SIZE로 만들고 0~19까지 레이블 붙이기
        for(let i=0; i<LABEL_SIZE3; i++) {
                chart3.data.labels[i] = i;
        }
        chart3.update();
}

function init4() { // chart4.data.labels의 크기를 LABEL_SIZE로 만들고 0~19까지 레이블 붙이기
        for(let i=0; i<LABEL_SIZE4; i++) {
                chart4.data.labels[i] = i;
        }
        chart4.update();
}
function addChart1Data(value) {
        tick1++; // 도착한 데이터의 개수 증가
        tick1 %= 100; // tick의 범위는 0에서 99까지만. 100보다 크면 다시 0부터 시작
        let n1 = chart1.data.datasets[0].data.length; // 현재 데이터의 개수
        if(n1 < LABEL_SIZE1) // 현재 데이터 개수가 LABEL_SIZE보다 작은 경우
                chart1.data.datasets[0].data.push(value);
        else { // 현재 데이터 개수가 LABEL_SIZE를 넘어서는 경우
                // 새 데이터 value 삽입
                chart1.data.datasets[0].data.push(value); // value를 data[]의 맨 끝에 추가
                chart1.data.datasets[0].data.shift(); // data[]의 맨 앞에 있는 데이터 제거

                // 레이블 삽입
                chart1.data.labels.push(tick1); // tick 값을 labels[]의 맨 끝에 추가
                chart1.data.labels.shift(); // labels[]의 맨 앞에 있는 값 제거
        }
        chart1.update();
}

function addChart2Data(value) {
        tick2++; // 도착한 데이터의 개수 증가
        tick2 %= 100; // tick의 범위는 0에서 99까지만. 100보다 크면 다시 0부터 시작
        let n2 = chart2.data.datasets[0].data.length; // 현재 데이터의 개수
        if(n2 < LABEL_SIZE2) // 현재 데이터 개수가 LABEL_SIZE보다 작은 경우
                chart2.data.datasets[0].data.push(value);
        else { // 현재 데이터 개수가 LABEL_SIZE를 넘어서는 경우
                // 새 데이터 value 삽입
                chart2.data.datasets[0].data.push(value); // value를 data[]의 맨 끝에 추가
                chart2.data.datasets[0].data.shift(); // data[]의 맨 앞에 있는 데이터 제거

                // 레이블 삽입
                chart2.data.labels.push(tick2); // tick 값을 labels[]의 맨 끝에 추가
                chart2.data.labels.shift(); // labels[]의 맨 앞에 있는 값 제거
        }
        chart2.update();
}

function addChart3Data(value) {
        tick3++; // 도착한 데이터의 개수 증가
        tick3 %= 100; // tick의 범위는 0에서 99까지만. 100보다 크면 다시 0부터 시작
        let n3 = chart3.data.datasets[0].data.length; // 현재 데이터의 개수
        if(n3 < LABEL_SIZE3) // 현재 데이터 개수가 LABEL_SIZE보다 작은 경우
                chart3.data.datasets[0].data.push(value);
        else { // 현재 데이터 개수가 LABEL_SIZE를 넘어서는 경우
                // 새 데이터 value 삽입
                chart3.data.datasets[0].data.push(value); // value를 data[]의 맨 끝에 추가
                chart3.data.datasets[0].data.shift(); // data[]의 맨 앞에 있는 데이터 제거

                // 레이블 삽입
                chart3.data.labels.push(tick3); // tick 값을 labels[]의 맨 끝에 추가
                chart3.data.labels.shift(); // labels[]의 맨 앞에 있는 값 제거
        }
        chart3.update();
}

function addChart4Data(value) {
        tick4++; // 도착한 데이터의 개수 증가
        tick4 %= 100; // tick의 범위는 0에서 99까지만. 100보다 크면 다시 0부터 시작
        let n4 = chart4.data.datasets[0].data.length; // 현재 데이터의 개수
        if(n4 < LABEL_SIZE4) // 현재 데이터 개수가 LABEL_SIZE보다 작은 경우
                chart4.data.datasets[0].data.push(value);
        else { // 현재 데이터 개수가 LABEL_SIZE를 넘어서는 경우
                // 새 데이터 value 삽입
                chart4.data.datasets[0].data.push(value); // value를 data[]의 맨 끝에 추가
                chart4.data.datasets[0].data.shift(); // data[]의 맨 앞에 있는 데이터 제거

                // 레이블 삽입
                chart4.data.labels.push(tick4); // tick 값을 labels[]의 맨 끝에 추가
                chart4.data.labels.shift(); // labels[]의 맨 앞에 있는 값 제거
        }
        chart4.update();
}

function hideshow() { // 캔버스 보이기 숨기기
        let canvas1 = document.getElementById("canvas1"); //canvas DOM 객체 알아내기
        if(canvas1.style.display == "none") // canvas 객체가 보이지 않는다면
                canvas1.style.display = "inline-block"; // canvas 객체를 보이게 배치
        else
                canvas1.style.display = "none" ;  // canvas 객체를 보이지 않게 배치
        let canvas2 = document.getElementById("canvas2"); //canvas DOM 객체 알아내기
        if(canvas2.style.display == "none") // canvas 객체가 보이지 않는다면
                canvas2.style.display = "inline-block"; // canvas 객체를 보이게 배치
        else
                canvas2.style.display = "none" ;  // canvas 객체를 보이지 않게 배치
        let canvas3 = document.getElementById("canvas3"); //canvas DOM 객체 알아내기
        if(canvas3.style.display == "none") // canvas 객체가 보이지 않는다면
                canvas3.style.display = "inline-block"; // canvas 객체를 보이게 배치
        else
                canvas3.style.display = "none" ;  // canvas 객체를 보이지 않게 배치
        let canvas4 = document.getElementById("canvas4"); //canvas DOM 객체 알아내기
        if(canvas4.style.display == "none") // canvas 객체가 보이지 않는다면
                canvas4.style.display = "inline-block"; // canvas 객체를 보이게 배치
        else
                canvas4.style.display = "none" ;  // canvas 객체를 보이지 않게 배치
}
window.addEventListener("load", function() {
	drawChart1(); 
	drawChart2();
	drawChart3();
	drawChart4();
}); // load 이벤트가 발생하면 drawChart1,2,3,4 호출하도록 익명 함수를 통해 등록




