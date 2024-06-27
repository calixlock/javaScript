let box = document.querySelector(".rectangle");
let func1 = (e, text) => {
  console.log("test : " + text);
};
box.addEventListener("mousedown", (event) => func1(event, "mouseDown"));
box.addEventListener("mouseup", (event) => func1(event, "mouseUp"));
box.addEventListener("mouseenter", (event) => func1(event, "mouseEnter"));
box.addEventListener("mouseleave", (event) => func1(event, "mouseLeave"));
box.addEventListener("mousemove", (event) => func1(event, "mouseMove"));
