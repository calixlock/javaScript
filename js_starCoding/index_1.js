// "use strict";
// var > function scope
function var_a() {
  var a = "var a : var is scope within the function.";
  //   console.log(a);
  if (true) {
    var a = "var a changes.";
    console.log(a + " within if");
  }
  console.log(a + " within function");
}
// var_a();
// console.log(a); // error 발생

// let > block scope
function let_a() {
  let a = "let a : let is scope within the block.";
  if (true) {
    let a = "let a changes.";
    console.log(a + " within if");
  }
  console.log(a + " within function"); //
}
// let_a();

function var_x() {
  var x = "first var x";
  if (true) {
    var x = "second var x";
    console.log(x);
  }
  console.log(x); //
}
// var_x();

function let_x() {
  let x = "first let x";
  if (true) {
    let x = "second let x";
    console.log(x);
  }
  console.log(x); //
}
// let_x();

function for_let_i() {
  for (let i = 0; i < 2; i++) {
    console.log(i);
  }
  //   console.log(i); // scope error 발생
}
// for_let_i();

function for_var_i() {
  for (var i = 0; i < 2; i++) {
    console.log(i);
  }
  console.log(i); // var i : 2
}
// for_var_i();

var aVar = "varGlobal"; // window객체(전역) 속성으로 저장됨 > 위험!!
let aLet = "letGlobal";
// console.log(window);
// console.log(window.aVar);

// var > 중복선언가능 > 위험
var y = "y1";
// console.log(y);
var y = "y2";
// console.log(y);
// let > 중복 불가
let z = "z1";
// let z = "z2";
// console.log(z);
