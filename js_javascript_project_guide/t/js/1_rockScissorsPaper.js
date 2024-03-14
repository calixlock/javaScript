// 유저 입력
let userInput = prompt("rock/scissors/paper 중 1개를 입력하세요");
//사용자 입력 검증
if (userInput !== "rock" && userInput !== "scissors" && userInput !== "paper") {
  alert("다시 입력하세요");
} else {
  // 컴퓨터 랜덤 선택
  let comInput;
  let rndNum = Math.random();
  if (rndNum < 0.33) {
    comInput = "rock";
  } else if (rndNum < 0.66) {
    comInput = "scissors";
  } else {
    comInput = "paper";
  }

  document.querySelector(".userInput").textContent = userInput;
  document.querySelector(".comInput").textContent = comInput;
}
