// 컴퓨터 선택
let comInput;
let rndNum = Math.random();
if (rndNum < 0.33) {
  comInput = "rock";
} else if (rndNum < 0.66) {
  comInput = "scissors";
} else {
  comInput = "paper";
}

// 가위바위보 paper결과
function RSP(user, com) {
  let resultList = ["이겼다", "비겼다", "졌다"];
  if (user === "rock") {
    switch (com) {
      case "rock":
        return resultList[1];
      case "paper":
        return resultList[2];
      default:
        return resultList[0];
    }
  } else if (user === "scissors") {
    switch (com) {
      case "rock":
        return resultList[2];
      case "paper":
        return resultList[0];
      default:
        return resultList[1];
    }
  } else {
    switch (com) {
      case "rock":
      case "rock":
        return resultList[0];
      case "paper":
        return resultList[1];
      default:
        return resultList[2];
    }
  }
}
function btnClick(userInput) {
  console.log(RSP(userInput, comInput));
  document.querySelector(".comInput").textContent = "com : " + comInput;
  document.querySelector(".result").textContent =
    "result : " + RSP(userInput, comInput);
}
