let n1 = 0.1;
let n2 = 0.2;

console.log(n1 + n2); // 부동소수점 문제
// 정수 계산 후 소수 원복 방식
console.log((n1 * 10 + n2 * 10) / 10);

console.log('&'.charCodeAt()); //문자의 번호 비교
console.log('abc' < 5); // false 
// 문자 숫자 비교시 문자화
// 'abc' > 문자열 > 숫자화 =>  NaN  
// Nan과 비교시 false 리턴
console.log('3'.charCodeAt());
console.log('3' < 5); // true
// 문자 '3'은 비교 연산시 숫자3으로 치환됨
// 그러므로 3<5로 연산 되므로 true 리턴
console.log('0' < true); // true
// 문자'0'는 비교연산 숫자화로 0으로 형변환 / true는 1로  형변환 그러므로 true 리턴
console.log(`1` === 1) // 같을 경우 === 비교
console.log(1 === true) // 같을 경우 === 비교
// console.log(`1` == 1) // 같을 경우 === 비교
// == 형변환 비교 되므로 
console.log(`1` !== 1); // 다를 경우 === 비교
console.log(1 !== true); // 같을 경우 === 비교
console.log(`1` != 1); // 같을 경우 === 비교

// 논리연산보다 비교연산이 우선순위 높다.
console.log(10 > 8 && 11 > 5); // and 연산 
console.log(10 > 8 || 2 < 5);
console.log(!true); // false; ! : 반대

// 문자 boolean 형변환 확인 false값 확인 필요!!
console.log(Boolean('a'));
console.log(`!!'a' = ${!!'a'}`)
console.log(`!!false = ${!!false}`)
console.log(`!!'' = ${!!''}`)
console.log(`!!0 = ${!!0}`)
console.log(`!!NaN = ${!!NaN}`)
console.log(`!!null = ${!!null}`)
console.log(`!!undefined = ${!!undefined}`)
// console.log(`!!document.all = ${!!document.all}`)
console.log(5 + 4 * 3 === 27);
console.log(5 + 4 * 3 !== 27);
console.log(5 + 4 * 3 != 27);
console.log(!(5 + 4 * 3 === 27));
console.log((5 + 4) * 3 === 27);
console.log(5 + 4 * 3 < 27);

console.log(`undefined => ${undefined} , type : ${typeof undefind}`)
// bug 중 하나 null > object  null은 null이다 초창기 오류로 object로 사용되고 있다.
console.log(`null => ${null} , type : ${typeof null}`)

// 변수 초기화 안하면 undefined
let a;
console.log(a);
//let 2a; // 변수명 처음 숫자는 안된다..
let num3 = 13;
num3 /= 3;
console.log(num3);
const prompt = require("prompt-sync")({ sigint: true });
let num = parseInt(prompt("숫자를 넣어주세요\n"));
function examIf(num) {
    console.log('if문 실행합니다.')
    if (num > 5) console.log("5보다 큽니다.");
    else if (num == 5) console.log("5 입니다");
    else console.log("5보다 작습니다.");
}
examIf(num);
function examSwitch(num) {
    console.log('switch문 실행합니다.')
    switch (num) {
        case 1:
            console.log('1 입니다')
            break; 
        case 2:
            console.log('2 입니다')
            break; 
        case 3:
            console.log('3 입니다')
            break;
        default:
            console.log('1~3이 아닙니다.')
    }
}
examSwitch(num);

