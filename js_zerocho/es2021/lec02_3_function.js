// 참고사이트 : https://www.youtube.com/watch?v=CMHXXTvbpzM&list=PLcqDmjxt30RvEEN6eUCcSrrH-hKjCT4wt&index=28

// 함수 선언 방식 3가지

function func1() {
    console.log('func1 입니다.');
}
const func2 = function() {
    console.log('func2 입니다');
};
const func3 = ()=>{
    console.log('func3 입니다.');
    return; // return undefined; 와 같다. 생략 가능
};
const func4 = ()=>{
    console.log('func4 입니다.');
    return 0;
    console.log('hello'); // 실행 안 됨
};


// 함수 호출
func1();
func2();
func3();
let a = func4();
console.log(`a : ${a}, type a : ${typeof a}`);

const func5 = (n1,n2)=>{
    console.log(`n1 : ${n1}, type n1 : ${typeof n1}`);
    console.log(`n2 : ${n2}, type n2 : ${typeof n2}`);
    return 0;
};
func5(2,'s');

const f = (x,y,z)=>{
    return x*y*z;
}
console.log(f(3,4,5));
const f2 = (x,y)=> (x+y);
console.log(f2(3,4)); // {},return 생략 가능

// object literal 객체 리터럴  / json 형식 > key : value

const user1 = {
    name: 'kim',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M',
    '2c' : 'c1',
    '1-c' : 'ccc',
};
console.log(user1.date);
console.log(user1['year']);
console.log(user1.gender);
console.log(user1['name']);
console.log(`user1.ddd =${user1.ddd}/ type : ${typeof user1.ddd}`); // 없는 속성 undefined
console.log(user1);
delete user1.gender; // 특정 속성 제거
console.log(user1);
user1.gender = 'man';
console.log(user1);
user1.gender = 'female';
console.log(user1);
const hello = () => {};
hello.a = 'a옵션추가';
hello.b = 'b옵션추가';
console.log(hello);
console.log(hello.a);
const testArr = [];
testArr.a = 'a옵션';
testArr.b = 'b옵션';
console.log(testArr);


// 객체 안의 속성 값으로 함수가 들어가면 메서드라 한다
const debug = {
    log: function(value) {
      console.log(value);
    },
  };
debug.log('Hello, Method');