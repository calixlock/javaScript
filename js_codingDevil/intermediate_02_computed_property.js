let a = 'age';
const user = {
    name : 'kim',
    [a] : 20,
}
console.log(user);

function makeObj(k,v){
    return{
    [k] : v,
    };
}
const t = makeObj('t',1234);
console.log(t);



//Object Method 여러가지 활용

//  Object.assign() // 객체 복사    // const cloneUser = user; // 참조형 이므로  주소복사 // 복제x
const newUser = Object.assign({}, user);
console.log('new',newUser);
const secondUser = Object.assign({name : 'na', age :15}, user); // 추가 해도 기존 메세지 에 덮어써 안바뀜
console.log('2nd',secondUser);
// 옵션 변경
secondUser.name = 'na';
secondUser.age = 15;
console.log('2nd',secondUser)
console.log('new',newUser);

const thirdUser = Object.assign({gender : 'male'}, user); // 추가됨
console.log('3nd',thirdUser);
const info1 = {
    gender : 'male',
}
const info2 = {
    city : 'seoul',
}
const fourthUser = Object.assign(user,info1,info2)
console.log('4nd',fourthUser);
// key / value / entries / fromEntries 
console.log('keys : ',Object.keys(fourthUser)); // 1차 배열로 반환
console.log('values : ',Object.values(fourthUser)); // 1차 배열로 반환
console.log('keys/values : ',Object.entries(fourthUser)); // 2차배열로 반환

const userA =
[
    [ 'name', 'userA' ],
    [ 'age', 20 ],
    [ 'gender', 'male' ],
    [ 'city', 'seoul' ]
];
const peopleA = Object.fromEntries(userA); // 2차배열 >> 객체로
console.log(peopleA);