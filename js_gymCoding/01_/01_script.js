// contents 변경
// 주의 : tag를 직접 insert 하기 때문에 div/section 같은 하위태그는 지워진다.
let title = document.querySelector("#title");
let testFunc = () => {
  title.textContent = "t1";
};
let testFunc2 = () => {
  title.innerHTML = "<strong>t2</strong>";
};
let testFunc3 = () => {
  document.querySelector("section").innerHTML = "<strong>t2</strong>";
};
