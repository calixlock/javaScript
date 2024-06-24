let addBtn = document.getElementById("button");
let inputBox = document.querySelector(".input");
//btn 기능 부여---------------------------------------
addBtn.addEventListener("click", () => {
  //자식태그 추가---------------------------------------
  let li = document.createElement("li");
  let ul = document.querySelector("ul.list");
  li.textContent = inputBox.value;
  ul.appendChild(li);
});
