let checkpoint = document.querySelector(".check");
checkpoint.addEventListener("click", (e) => {
  console.log(e);
});

let pp = document.querySelector(".pp");
pp.onclick = () => {
  alert("pp");
};
// addEventListener 방식  > 여러개 동기 방식으로 작동
/*
호출된 순서대로 이벤트 리스너를 등록하며, 
등록된 이벤트 리스너들은 이벤트가 발생했을 때 
순차적으로 실행 */
let el = document.querySelector(".el");
let fun1 = () => {
  alert("el");
};
let fun2 = () => {
  alert("el-2");
};

el.addEventListener("click", fun1);
el.addEventListener("click", fun2);
// event 제거 / fun1제거 후 fun2만 호출
el.removeEventListener("click", fun1);
