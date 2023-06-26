const fruits = ['사과','오렌지','배'];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

const everything = ['사과', 1, undefined, true, '배열', null];
for(let idx=0; idx<everything.length; idx++){
    console.log(`everything[${idx}] : ${everything[idx]} | type : ${typeof everything[idx]}`);
}


everything[everything.length] = 'element_Add_1'; // 뒷열 추가
everything.push('add2'); // 뒷열 추가

const target = [...everything]; // js 배열 spread 복사

console.log(everything);
everything[0] = 'idx_0_add' // idx 0 위치의 값이 변경됨
console.log(`everything : ${everything}`);

target.unshift('idx_0_add'); // 맨앞요소 추가
console.log(`target : ${target} | len :${target.length}`);
target.pop(); // 마지막 요소 제거
console.log(`target pop 1회 실행: ${target} | len :${target.length}`);
target.shift(); // 첫 요소 제거
console.log(`target shift 1회 실행: ${target} | len :${target.length}`);

//특정 위치 제거
target.splice(1,1);// (index, 몇개)

const arr = ['가','나','다','라','마'];
const result = arr.includes['가']; // true / false 반환
console.log(`result = ${result}`);
const arr2 = [...arr.splice(3,1,'0')];
console.log(`arr2 = ${arr2} | arr = ${arr}`);
const arr3 = [...arr.splice(2)];
console.log(`arr3 = ${arr3} | arr = ${arr}`);

console.log(`arr = ${arr}`);

const ar1 = ['라','가','나','다','라','마'];
const r1 = ar1.indexOf('나');
console.log(`r1 = ${r1}`);
let r2 = ar1.indexOf('라');
console.log(`r2 = ${r2}`);
r2 = ar1.lastIndexOf('라');
console.log(`r2 = ${r2}`);

// 
const a = ['라','가','나','다','라','마'];
while(a.includes('라')){
    // let n = a.indexOf('라') // 없을 경우 -1
    a.splice(a.indexOf('라'),1);
}
console.log(`arr = ${a}`);