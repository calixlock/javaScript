let [x,y] = [1,2];
console.log(`x : ${x}, y : ${y}`);

let numbers = [1,2];
let [n1, n2, n3] = numbers;
console.log(`n1 : ${n1}, n2 : ${n2}, n3 : ${n3}`); // 부족시 undefined

[n1=10, n2=20, n3=30] = numbers;
console.log(`n1 : ${n1}, n2 : ${n2}, n3 : ${n3}`); // 초기값 지정으로 해결 가능;

let strs = "mike";
let [a1,a2,a3] = strs.split("");
console.log(`a1 : ${a1}, a2 : ${a2}, a3 : ${a3}`); // error 없이 e는 탈락된다

let [b1, ,b2 ] = strs.split("");
console.log(`b1 : ${a1}, b2 : ${b2}`); // 일부 값 무시

// swap 간단히 해결
let c1 = 1;
let c2 = 2;
console.log(`c1 : ${c1}, c2 : ${c2}`);

[c1,c2] = [c2,c1];
console.log(`swap > c1 : ${c1}, c2 : ${c2}`);

let user1 = {
    name : 'kim',
    age : 30,
}

// let {name,age} = user1; 
//같은의미  let name = user1.name; let age = user1.age;

let {name : n ,age : a, genger : g} = user1; //데이터 새로운 변수 할당
console.log(`n : ${n}, a : ${a}`);
console.log(`gender: ${g}`)
a = 40; // 할당 변수 값만 변함
console.log(`user1.age : ${user1.age}, a : ${a}`);

let user2 = {
    name : 'jane',
    age : 22,
    gender : 'female',
}
let {name,age,gender='male'} = user2;
console.log(user2); // gender 값이 존재하므로 초기값('male')은 무시됨

let {$n1,$a1,$g1='male'} = user1;
console.log($g1); // gender의 초기값 할당 됨


