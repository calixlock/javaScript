let userInput = prompt("rock/scissors/paper 중 1개를 입력하세요");

let comInput;
let rndNum = Math.random();
if (rndNum < 0.33) {
  comInput = "rock";
} else if (rndNum < 0.66) {
  comInput = "scissors";
} else {
  comInput = "paper";
}
// console.log(comInput);
document.querySelector(".userInput").textContent = userInput;
document.querySelector(".comInput").textContent = comInput;
