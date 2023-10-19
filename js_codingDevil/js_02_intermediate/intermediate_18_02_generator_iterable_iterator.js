//  generator
//  iterable // symbol.iterator 메서드 존재 // symbol.iterator는 iterator를 반환.
//  iterator // next 메서드 존재 // next ={value:xxx, done:false/true} value/done 속성 반환 가능 
// 작업 끝난후 done : true 
// 작업중 done: false

// const arr =[1,2,3,4,5]; // 일반적인 iterable 객체

// const it = arr[Symbol.iterator](); // arr[Symbol.iterator] : 실행여부 확인
// 실행가능시ㅏ next() 로 하나씩 반복수행 가능
// it.next();

// iterable하다면 가능
// for(let i of arr){
//     console.log(i)
// }

function* fn() {
    try {
        const n1 = yield "첫번째 숫자 입력하세요";
        console.log(n1);

        const n2 = yield "두번째 숫자 입력하세요";
        console.log(n2);
        return n1 + n2;

    } catch (e) {
        console.log(`error 발생 : ${e}`)

    } finally {
        console.log(종료)
    }
}
const a =fn();

function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}
function* gen2(){
    yield "hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2());