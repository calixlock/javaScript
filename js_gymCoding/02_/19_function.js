"use strict";

// function
sayHello();
function sayHello(p1 = "default_p1", p2 = "default_p2") {
  // 호이스팅(선언전에 끌어올려져)되어 실행됨
  console.log(`p1 : ${p1} \np2 : ${p2}`);
}
sayHello("a", "b");

// sayHello2(); // 함수 선언전 실행 error발생
let sayHello2 = () => {
  console.log("hi ver2");
};
sayHello2();

let func_sum = (n1 = 0, n2 = 0) => {
  return n1 + n2;
};
func_sum();
let result = func_sum(1, 2);
console.log(result, typeof result);
result = func_sum(result, 1);
console.log(result, typeof result);

let hello = (name = "없음") => `hello ${name}`;
let hello2 = hello("mj");
console.log(hello2);
console.log(hello());

// function 함수 > 동사
// variable 변수 > 명사
let fruits = ["사과", "바나나", "딸기"];
fruits.forEach((item, idx) => {
  console.log(`${idx + 1}번째 과일 : ${item} 입니다`);
});
