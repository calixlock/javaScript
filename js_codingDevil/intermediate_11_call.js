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

//apply
const nums = [3,1,222,13,24,3];
let minNum = Math.min(nums);
console.log(minNum);// 배열 안에 감싸져 있는걸 찾아 낼수 없다.

minNum = Math.min(...nums)// flat화 필요
console.log(minNum);

let maxNum = Math.max.apply(null,nums); // 배열 상태로 받음
console.log(maxNum);

let maxNum_v2 = Math.max.call(null,...nums); // 매개변수 상태로 받음
console.log(maxNum_v2);
console.log(...nums);


