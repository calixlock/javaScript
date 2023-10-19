//apply
const nums = [3,1,222,13,24,3];
let minNum = Math.min(nums);
console.log(minNum);// 배열 안에 감싸져 있는걸 찾아 낼수 없다.

minNum = Math.min(...nums)// flat화 필요
console.log(minNum);

let maxNum = Math.max.apply(null,nums); // 배열[] 상태로 받음
console.log(maxNum);

let maxNum_v2 = Math.max.call(null,...nums); // 매개변수 상태로 받음
console.log(maxNum_v2);
console.log(...nums);