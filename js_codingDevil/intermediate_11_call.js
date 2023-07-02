const u1 = {
    name : 'mike',
    age : 20,
}
const u2 = {
    name : 'kim',
    age : 30,
}
const u3 = {
    name : 'tom',
    age : 40,
}
function showThis(){
    console.log(this.name);
    console.log(this.age);
}
showThis.call(u1);
showThis.call(u2);

function update(birthYear,occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
console.log('update 실행');
update.call(u2,1999,"student"); // 데이터 추가
console.log(u2);
update.call(u3,2020); // 데이터 추가 없는 데이터 undefined 
console.log(u3);
update.apply(u1,[1995,'teacher']);
console.log(u1);




