let box = document.querySelector(".rectangle");
let func1 = (e, text) => {
  console.log("test : " + text);
};
// box.addEventListener("mousedown", (event) => func1(event, "mouseDown"));
// box.addEventListener("mouseup", (event) => func1(event, "mouseUp"));
// box.addEventListener("mouseenter", (event) => func1(event, "mouseEnter"));
// box.addEventListener("mouseleave", (event) => func1(event, "mouseLeave"));
// box.addEventListener("mousemove", (event) => func1(event, "mouseMove"));

box.addEventListener("mousedown", (e) => {
  // 브라우저 기준 /좌표 좌측/상단(0,0)기준
  console.log(`client x,y : ${e.clientX},${e.clientY}`);
  // html 웹문서 기준 사이즈 기준
  console.log(`page x,y : ${e.pageX},${e.pageY}`);
});

// 마우스 따라 circle 움직이기
// let body = document.querySelector("body");
// body.addEventListener("mouseover", (e) => {
//   let mouseCircle = document.createElement("div");
//   mouseCircle.classList.add("circle");
//   mouseCircle.style.left = e.pageX - 25 + "px";
//   mouseCircle.style.top = e.pageY - 25 + "px";
//   body.appendChild(mouseCircle);
//   // e.target.setAttribute("top", e.clientY);
//   // e.target.setAttribute("left", e.clientX);
// });
// 특정 이벤트가 발생한 대상(target)의 정보를 가져올때
box.addEventListener("click", (e) => {
  // target의 태그
  console.log(e.target);
  // target의 속성 정보
  console.log(e.target.getBoundingClientRect());
});
