// let cl = console.log;
// let h2 = document.querySelector("h2");
// cl(h2.dataset.test);
// h2.dataset.test = "change";
// cl(h2.dataset.test);

// item에 따른 사진 변경
// 태그 선택
let itemList = document.querySelectorAll("li");
let img = document.querySelector("img");
let selectedItem = document.querySelector(".selectedItem");
// 함수
let selectItem = (event) => {
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
};

// 각 itemList 요소에 이벤트 리스너 추가
itemList.forEach((item) => {
  item.addEventListener("click", selectItem);
});
