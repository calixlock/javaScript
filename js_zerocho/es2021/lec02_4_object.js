// 참고 사이트 : https://www.youtube.com/watch?v=VXVIVblOBK4&t=451s
const arr = [1,2,'a'];
const arr2 = [1,2,'a'];
const arr3 = arr;
console.log(arr === [1,2,'a']); // false  >> []는 참조형 객체 [] 생성시 새로 나오므로 
console.log(arr === arr2); // false
console.log(arr === arr3); // true
