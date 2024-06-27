let inputBox = document.querySelector("#inputBox");
// inputBox.addEventListener("keydown", (e) => {
//   console.log("keydown");
// });
inputBox.addEventListener("keyup", (e) => {
  // keyCode > 아스키코드값
  console.log(`keyUp (key:${e.key},keyCode:${e.keyCode} `);
});
inputBox.addEventListener("change", (e) => {
  // change : input의 value가 변경되었을 때
  console.log(`change `);
});
inputBox.addEventListener("focus", (e) => {
  // focus 될 때
  console.log(`focus !`);
});
inputBox.addEventListener("blur", (e) => {
  // blur = focus에서 멀어질때
  console.log(`blur !`);
});

// image error 감지
let img = document.querySelector("img");
img.addEventListener("error", (e) => {
  console.log("image error 발생");
  // 실패시 보여줄 이미지 코드
  e.target.src = "../images/01_spring.jpg";
});
