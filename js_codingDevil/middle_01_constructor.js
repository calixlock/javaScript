// https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=16s

function User(name,age){
    // this = {}; // 자동 실행 / 생략됨
    this.name = name;
    this.age = age;
    // return this; // 자동 실행 / 생략됨
    //  this.sayName = function(){
    this.sayName = function() {
        console.log(this.name);
     }
}

user1 = new User('kim',20);
user2 = new User('an');
user3 = User('na',22);
console.log(user1);
console.log(user2);
console.log(user3); // undefined >> User함수 실행되고 리턴해주는 값이 없으므로 undefined;
user2.sayName();
