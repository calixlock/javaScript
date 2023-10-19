const U1 = function( name, age){
    this.name = name;
    this.age = age;
    // this.showName = function() {
    //     console.log(this.name);
    // };
};
U1.prototype.showName = function(){
    console.log(this.name);
};

const user1 = new U1('mike', 30); // new 재생성 없이 사용 가능 값은 undefined
console.log(user1);
user1.showName();
for(let i in user1){
    console.log(i);
}// showName 출력됨 property

class U2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    
    };
    showName() {
        console.log(this.name);
    };
};
const user2 = new U2('tom', 22);
console.log(user2);
user2.showName();
for(let i in user2){
    console.log(i);
}// showName 제거됨