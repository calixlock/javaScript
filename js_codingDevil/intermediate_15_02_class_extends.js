class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log('drive ~ ');
    }
    stop(){
        console.log('STOP!');
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color); // 부모의 constructor를 실행 및 넘겨주는 작업해야함
        this.navigation =1; // 부모 constructor 불러 오지 않으면 this error발생
    }
    parking(){
        console.log('parking!');
    }
    stop(){
        console.log('BMW STOP!') //method overriding
    }
}
const a1 = new Bmw('red');
console.log(a1);
for(let e in a1){
    console.log(e);
};
a1.drive();
a1.parking();
a1.stop();