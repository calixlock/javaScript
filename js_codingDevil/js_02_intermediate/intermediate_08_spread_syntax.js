let arr1 = [1,2,3];
let arr2 = [5,6,7];

let arr12 = [arr1,arr2,8];
// console.log(`arr12 :`,arr12);

let arr121 = [0,...arr1,...arr2,8]
// console.log('arr121\n',arr121);
// console.log(`arr121.length = ${arr121.length}`)

// 배열 합치기 v1
// let arr21_v1 = Object.assign(arr1);
// arr2.reverse().forEach(e => {
//     arr21_v1.unshift(e);
// });
// console.log(arr21_v1);

// 배열 합치기 v2
let arr21_v2 = [...arr2, ...arr1];
// console.log(arr21_v2);

// 객체 데이터 가공
let user = { name : 'kim'};
let info = { age : 30 };
let fe = ['js','react'];
let lang = ['kor','eng'];
// method_1
// user = Object.assign({}, user, info, {skills : [], skills2 :[]});
// fe.forEach(e=>
//     user.skills.push(e));
// lang.forEach(e=>
//     user.skills.push(e));
// user.skills2= [...fe,...lang];

// method_2 : 매우 간편
user = {
    ...user,
    ...info,
    skills :[...fe,...lang],
}
console.log(user);