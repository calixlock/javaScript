function makeObject(name, age){
    return {
        name : name,
        age : age,
        hobby: "football"
    }
}
const mike = makeObject('mike',30);
console.log(mike);
function makeObject2(name,age){
    return {
        name ,
        age ,
        hobby: "football"
    }
}
const mike2 = makeObject2('mike',30);
console.log(mike2);
console.log("age" in mike);
console.log("birthday" in mike);

const mike3 = makeObject2('mike');
console.log("mike3 : ",mike3);
console.log("mike3 in age : ","age" in mike); //객체에 속성은 있지만 값은 undefined
console.log("age : ",mike3.age);

function isAdult(user) {
    if(user.age === undefined || user.age < 20 ){
        return false;
    }return true;
}
console.log(isAdult(mike3));

function makeObject3(name,age){
    return {
        name ,
        hobby: "football"
    }
}
const kim = makeObject3('kim');
// kim['age']= 30;
console.log(kim);
console.log('kim.age',kim.age,typeof kim.age,isAdult(kim));

for(x in kim){
    console.log(x,kim[x]);
}
