// javaScript
let a = $("input");
// a.hide();
let elem = $(".abc");
// elem.style.display = "none";
let elem2 = $(".a");
// console.log(elem2);
let elem3 = $(".c");
console.log(elem2.length);
if (elem3.length === 0) {
  elem3.hide();
}
if (elem2.length === 2) {
  elem2.hide();
} else {
  elem2.show();
}
