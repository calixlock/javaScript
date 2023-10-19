console.log('start')

//setTimeout : 지정된 시간 이후 실행
function fn(){
    console.log('2초후 실행됨');
}
// setTimeout(fn,2000) // 2000ms > 2sec;

function showName(name){
    console.log(name);
}
// const tId = setTimeout(showName,2000,'tom'); // (fn , time , fn(parms))
// clearTimeout(tId); // setTimeout 스케쥴링 제거

// interval 실행
// const intervalId = setInterval(showName,2000,'tom'); // (fn , time , fn(parms)) //시간 반복

// interval 중지
// clearInterval(intervalId);

// console.log('end')

//함수 실행시 일단 모든 스크립트 실행 후 실행됨 우선순위 기본;

let num = 1;
function showTime(){
    console.log(`${num++}초가 경과 되었습니다`);
    if(num > 5){
        clearInterval(repeat_v1);
    }
}
const repeat_v1 = setInterval(showTime,1000);