
const str1 = 'xx';
const str2 = "zz";
const str3 = `tt`;
const str4 = "";
const str5 = "\\";
const str6 = '\n줄바꿈';
const str7 = "he\'s a man";


console.log(typeof str5);
console.log(typeof str7);
// NaN > Not a Number > type => number
console.log(typeof NaN);
const n1 = 123;
const str8 = '123';
console.log(n1 === str8);
console.log(parseInt(str8) === n1);
let n2 = 3.14;
console.log(parseFloat(n1));
let a = '3월'
console.log(parseInt(a)); // 3만 출력
let b = '3월15일'
console.log(parseInt(b)); // 3만 출력
let str = 'adskfjs';
console.log(str.substring(0,2)); // index 0,1 출력
// prompt is not defined
const prompt=require("prompt-sync")({sigint:true});
let tt = prompt("입력하세요"); // 문자열 타입으로 받음
console.log(`input = ${tt}, type = ${typeof tt}`);