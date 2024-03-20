// let userSoreElem = document.querySelector("#user-score");
// userSoreElem.innerHTML = "<ch>zero</ch>";
// let userScoreElem = document.getElementById("user-score");
// console.log(userScoreElem);
let comScore = 0;
let comScoreElem = document.querySelector("#com-score");

let onComShoot = () => {
  let textElem = document.querySelector("#text");
  //슛타입 50%확률로 결정
  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    // 2점슛 성공확률 50%
    if (Math.random() < 0.5) {
      textElem.innerHTML = "COM 2점슛을 성공!";
      comScore += 2;
    } else {
      textElem.innerHTML = "COM 2점슛을 실패!";
    }
  } else {
    // 3점 슛 성공확률 33%
    if (Math.random() < 0.33) {
      textElem.innerHTML = "COM 3점슛을 성공!";
      comScore += 3;
    } else {
      textElem.innerHTML = "COM 3점슛을 실패!";
    }
  }
  comScoreElem.innerHTML = comScore;
};
