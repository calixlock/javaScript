let cl = console.log;
let addBtn = document.getElementById("button");
let inputBox = document.querySelector(".input");
let removeBtn = document.querySelector(".remove-btn");
let ul = document.querySelector("ul.list");

// 제거 함수
let removeParentNode = (event) => {
  // closest 메서드를 이용하여 가장 가까운 li 요소를 찾아 제거
  event.target.closest("li").remove();
  inputBox.value = "";
  inputBox.focus();
};

// 빈 값 체크 함수
function checkInput(value) {
  if (!value.trim()) {
    alert("빈 값 발생, 다시 입력해주세요.");
    return false;
  }
  return true;
}

// 아이템 추가 함수
function addItem(value, target) {
  let li = document.createElement("li");
  li.textContent = value;

  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.classList.add("remove-btn");
  btn.addEventListener("click", removeParentNode);

  li.appendChild(btn);
  ul.insertBefore(li, target);
}

// 버튼 클릭 이벤트 핸들러
addBtn.addEventListener("click", () => {
  if (!checkInput(inputBox.value)) return;
  addItem(inputBox.value, null);
  inputBox.value = "";
  inputBox.focus();
});

// 특정 위치에 추가 버튼 클릭 이벤트 핸들러
document.querySelector("#before").addEventListener("click", () => {
  if (!checkInput(inputBox.value)) return;
  let targetLi = document.querySelector(".target");
  addItem(inputBox.value, targetLi);
  inputBox.value = "";
  inputBox.focus();
});
// 기존 target 태그 x버튼 제거용
removeBtn.addEventListener("click", removeParentNode);

// 초기 Dark 모드 설정
document.body.classList.add("dark-blue");
