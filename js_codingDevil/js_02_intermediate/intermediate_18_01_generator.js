// generator : 
// 함수의 실행을 중간에 멈췄다 재개하는 기능
function* fn() {
    try{
        console.log('yield 1 실행 전');
        yield 1;
        console.log('yield 2 실행 전');
        yield 2;
        console.log('yield 3 실행 전');
        yield 3;

        return 'finish';
    }catch(e){
        console.log(e);
    }
}

const a = fn();
// a.next(); // next 호출시 근접한 yield 값 value 반환
// a.return('msg'); // return 호출 시 done속성 true로 변경 > yield값 얻을 수 없음, 종료됨
// a.throw(); // done속성 true로 변경