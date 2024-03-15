// 서로다른 숫자 6개뽑기
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
let count = 0;
do {
  n1 = Math.floor(Math.random() * 45) + 1;
  n2 = Math.floor(Math.random() * 45) + 1;
  n3 = Math.floor(Math.random() * 45) + 1;
  n4 = Math.floor(Math.random() * 45) + 1;
  n5 = Math.floor(Math.random() * 45) + 1;
  n6 = Math.floor(Math.random() * 45) + 1;
} while (n1 === n2 || n1 === n3 || n1 === n4 || n1 === n5 || n1 === n6);
{
  count++;
}
console.log(n1, n2, n3, n4, n5, n6, count);
