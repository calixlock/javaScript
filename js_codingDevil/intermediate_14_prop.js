const u1 = {
    name : 'mike',
    // age : 20,
}
let a = u1.hasOwnProperty('name');
console.log(a);

const car = {
    wheels : 4,
    drive(){
        console.log("car drive.")
    },
};
const bmw = {
    color : 'red',
    navigation: 1,
};
const benz = {
    color : 'black',
};
const audi = {
    color : 'blue',
};
const x5 = {
    color : 'white',
    modelName : 'x5'
}
// 상속 inherit
console.log(`bmw wheels : ${bmw.wheels}`);
bmw.__proto__ = car;
console.log(`car 상속 후\nbmw wheels : ${bmw.wheels}`);
x5.__proto__ = bmw;
console.log(`car 상속 후\nx5 wheels : ${x5.wheels}`);

for(e in x5){
    if(x5.hasOwnProperty(e)) console.log('o',e);
    else console.log('x',e);
}
console.log(Object.entries(x5)); // 상속된 건 나오지 않는다
console.log(x5.color);

const bmw2 = function(color){
    // this.color = color; // 누구나 접근하여 변경 가능
    const c = color; // 변경 불가능하고
    this.getColor = function(){ // getter 기능으로 확인 가능
        console.log(C);
    };
};
const a1 = new bmw2('red');
const a2 = new bmw2('blue');
// 상속방식
a1.__proto__ = car;
a1.drive();
console.log(a1.wheels);
// 생성자 함수 prototype 선언 방식

// method1
bmw2.prototype.year = 1994;
bmw2.prototype.ride = function () {
    console.log("ride!");
};
// method2
bmw2.prototype={
    constructor: bmw2,
    year : 1994,
    ride() {
        console.log("ride!");
    },

}

console.log(a2.year);
a2.ride();
console.log(a2);
console.log('a2 instanceof bmw2',a2 instanceof bmw2)
console.log('a2.constructor === bmw2',a2.constructor === bmw2);