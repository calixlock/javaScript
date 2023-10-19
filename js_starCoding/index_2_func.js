function c1() {
  document.getElementById("test").innerHTML = Date().slice(0, 25);
}
const c2 = () => {
  document.getElementById("test").innerHTML = "c2 clicked";
  document.getElementById("myText").value = "clicked !!!";
};

const date = new Date("2022-03-25");
// console.log(date);
