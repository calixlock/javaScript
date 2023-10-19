function showName(names){
    console.log(names);
    console.log(arguments);
}
showName('mike');
showName('mike','kim','tom'); // mike만 출력됨

function showName2(names){
    console.log('showNamePlus')
    for (let idx = 0; idx < arguments.length; idx++) {
        console.log(arguments[idx]);
    }
}
showName2('mike','kim','tom'); //arguments로 각각 출력됨

function showName3(...names){ // names가 array로 반환
    console.log(names);
}
showName3('mike');
showName3('mike','kim','tom');

function funcAdd(...nums){
    let result = 0;
    console.log(` typeIsArray :${Array.isArray(nums)}`)
    // nums.forEach((e)=> (result += e)); // method 1
    result = nums.reduce((p,v)=>p+v) // method 2
    return console.log(result);
}
funcAdd(1,2,3,4,5);

function addUser(name,age,...skils){
    this.name= name;
    this.age= age;
    this.skils= skils;
}
const u1 = new addUser('kim',20,'python','css','html');
const u2 = new addUser('tom',24,'c','c++','java');
const u3 = new addUser('kim',31,'js','react','nodeJs');
console.log(u1);
console.log(u2);
console.log(u3);

