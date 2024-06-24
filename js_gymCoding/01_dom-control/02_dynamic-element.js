let cl = console.log;
let addBtn = document.getElementById("button");
let inputBox = document.querySelector(".input");
let removeBtn = document.querySelector(".remove-btn");
// 제거 함수
let removeParentNode = (event) => {
  event.target.parentNode.remove();
  inputBox.value = "";
  inputBox.focus();
};

// 빈 값 체크 함수
function checkInput() {
  if (inputBox.value === "") {
    alert("빈 값 발생, 다시 입력해주세요.");
    return false;
  }
  return true;
}
//btn 기능 부여---------------------------------------
addBtn.addEventListener("click", () => {
  if (!checkInput()) return;
  //자식태그 추가---------------------------------------
  let li = document.createElement("li");
  let ul = document.querySelector("ul.list");
  li.textContent = inputBox.value;

  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.classList.add("remove-btn");
  //remove-----------------------
  btn.addEventListener("click", removeParentNode);
  li.appendChild(btn);
  ul.appendChild(li);
  // 추가후 비어주기
});
//특정위치에 추가------------------------------
let addBeforeBtn = document.querySelector("#before");
addBeforeBtn.addEventListener("click", () => {
  if (!checkInput()) return;
  let li = document.createElement("li");
  let ul = document.querySelector("ul.list");
  let targetLi = document.querySelector(".target");
  // 빈값처리
  li.textContent = inputBox.value;
  // btn 추가
  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.classList.add("remove-btn");
  // 버튼 반영
  li.appendChild(btn);
  // 태그 반영
  ul.insertBefore(li, targetLi);
});
removeBtn.addEventListener("click", removeParentNode);
