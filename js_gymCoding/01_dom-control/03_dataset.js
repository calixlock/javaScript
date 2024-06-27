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

itemList[0].addEventListener("click", selectItem);
itemList[1].addEventListener("click", selectItem);
itemList[2].addEventListener("click", selectItem);
itemList[3].addEventListener("click", selectItem);
// 함수
