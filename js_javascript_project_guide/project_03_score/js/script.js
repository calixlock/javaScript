// let userSoreElem = document.querySelector("#user-score");
// userSoreElem.innerHTML = "<ch>zero</ch>";
// let userScoreElem = document.getElementById("user-score");
// console.log(userScoreElem);

let textElem = document.querySelector("#text");

let onComShoot = () => {
  let shootType = Math.random() < 0.5 ? 2 : 3;
  console.log(shootType);
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = "COM 2점슛을 성공!";
    } else {
      textElem.innerHTML = "COM 2점슛을 실패!";
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = "COM 3점슛을 성공!";
    } else {
      textElem.innerHTML = "COM 3점슛을 실패!";
    }
  }
};
