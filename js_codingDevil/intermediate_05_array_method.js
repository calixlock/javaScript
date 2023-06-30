let arr = [1, 2, 3, 4, 5];
const result = arr.find((e) => {
    return e % 2 === 0;
});
console.log(result);

let userList = [
    { name: "tom", age: 19 },
    { name: "kim", age: 30 },
    { name: "mark", age: 24 },
];
userList.find((e) => {
    console.log(e);
})

const result2 = arr.filter((e) => {
    return e % 2 === 0;
});
console.log(result2);

arr.reverse();
console.log('arr : ', arr);

let newUserList = userList.map((user, idx) => {
    return Object.assign({}, user, {
        index: idx,
        isAdult: user.age > 20,
    });
});
console.log('userList\n', userList);
console.log('newUserList\n', newUserList);

let arr2 = ['a', 'b', 'c'];
let r1 = arr2.join();
console.log(r1);
let r2 = arr2.join("");
console.log(r2);
let sp1 = r1.split(",");
console.log('sp1', sp1)
let sp2 = r2.split("");
console.log('sp2', sp2)

console.log('sp2 is Array ? ', Array.isArray(sp2))
console.log('userList[0] is Array ? ', Array.isArray(userList[0]))


let arr3 = [1, 2, 3, 4, 5];
let count = 0;
const sum33 = arr3.reduce((n1,n2)=>n1+n2);
console.log('reduceNotFunction\n',sum33,'\n');
const sum3 = arr3.reduce((prev, e) => { // 배열 처음부터
    console.log(`prev : ${prev}, e : ${e} count : ${++count}`)
    return prev + e;
}, 0)
console.log('reduce >> sum \n',sum3);
const sum3Right = arr3.reduceRight((prev, e) => { // 배열끝에서부터
    console.log(`prev : ${prev}, e : ${e} count : ${++count}`)
    return prev + e;
}, 0)
console.log('\nreduceRight >> sum \n',sum3Right);
// console.log(arr3);

userList = [
    { name: "tom", age: 19 },
    { name: "kim", age: 30 },
    { name: "mark", age: 24 },
    { name: "herry", age: 14 },
    { name: "mark", age: 37 },
    { name: "steve", age: 28 },
];
console.log(typeof userList);
console.log(Array.isArray(userList));
// prev : previous cur : current list 재구성 방식
let reduceFilterList = userList.reduce((lit, cur) => {
    if (cur.age > 20) {// 필터 조건
        lit.push(cur);// 필터된 항목 > 세부 설정 가능
        lit.push(cur.name) // 필터된 데이터만 초기값 list에 삽입
    }
    return lit;
}, []) // 초기값에 []를 주어 array로 데이터 반환
console.log(`reduceFilterList\n`,reduceFilterList);