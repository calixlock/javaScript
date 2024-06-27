let cl = console.log;

// let h2 = document.querySelector("h2");
// cl(h2.dataset.test);
// h2.dataset.test = "change";
// cl(h2.dataset.test);

// item에 따른 사진 변경
let itemList = document.querySelectorAll("li");
let img = document.querySelector("img");
let selectedItem = document.querySelector(".selectedItem");
itemList[0].addEventListener("click", (event) => {
  cl(event.target.dataset.img);
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
});
itemList[1].addEventListener("click", (event) => {
  cl(event.target.dataset.img);
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
});
itemList[2].addEventListener("click", (event) => {
  cl(event.target.dataset.img);
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
});
itemList[3].addEventListener("click", (event) => {
  cl(event.target.dataset.img);
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
});
