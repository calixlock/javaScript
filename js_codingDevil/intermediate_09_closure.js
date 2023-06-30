function makeAdder(x){
    return function(y){
        return x+y;
    }
}
const add3 = makeAdder(3); // add3 > makerAdder(3)인채 대기 y를 받아 들일 상황;
console.log(add3(2))// 5; add3에 있던 x=3 대기 기입된 y의 2를 넘겨 합성하는 함수 실행
