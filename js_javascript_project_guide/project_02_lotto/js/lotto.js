// 변수 및 리스트 초기화
let startNum = 1;
let lastNum = 45;
let idxBall = 0;
let ballCount = 6;

let numList = [];
let lottoList = [];
// lotto list 작성
for (let i = startNum; i <= lastNum; i++) {
  numList.push(i);
}
// lotto 6개 추출
for (let i = 1; i <= ballCount; i++) {
  idxBall = Math.floor(Math.random() * numList.length);
  lottoList.push(numList[idxBall]);
  numList.splice(idxBall, 1);
}
// lotto 숫자 정렬
lottoList.sort((a, b) => a - b); // 오름차순
// lottoList.sort((a, b) => b - a); // 역순
// html 반출
for (let i = 0; i < lottoList.length; i++) {
  document.write('<div class="ball">' + lottoList[i] + "</div>");
}
console.log(numList);
