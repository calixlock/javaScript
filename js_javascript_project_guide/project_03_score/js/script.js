//-------------------------btn activation -----------------
let btnLock = (isComTurn) => {
  let comBtns = document.querySelectorAll(".btn-com");
  for (let i = 0; i < comBtns.length; i++) {
    comBtns[i].disabled = !isComTurn;
  }
  let userBtns = document.querySelectorAll(".btn-user");
  for (let i = 0; i < userBtns.length; i++) {
    // 버튼 비활성화
    userBtns[i].disabled = isComTurn;
    // 버튼 없애기
    // userBtns[i].style.display = "none";
  }
};
// -------------------initial settings --------------------------------
let isComTurn = true;
btnLock(isComTurn);

//-------------------------turn change function------------
let turnChange = () => {
  isComTurn = !isComTurn;
  console.log(`comTurn : ${isComTurn}`);
};
//-------------------------com part------------------------
let comScore = 0;
let comScoreElem = document.querySelector("#com-score");

let onComShoot = () => {
  let textElem = document.querySelector("#text");
  //
  if (!isComTurn) {
    textElem.innerHTML = "USER 차례입니다!";
    return;
  }
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
  // turn 체크 전환
  turnChange();
  btnLock(isComTurn);
};
//-------------------------user part------------------------
let userScore = 0;
let userScoreElem = document.querySelector("#user-score");

let onUserShoot = (shootType) => {
  let textElem = document.querySelector("#text");

  if (isComTurn) {
    textElem.innerHTML = "COM 차례입니다!";
    return;
  }

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = "USER 2점슛을 성공!";
      userScore += 2;
    } else {
      textElem.innerHTML = "USER 2점슛을 실패!";
    }
  } else {
    // 3점 슛 성공확률 33%
    if (Math.random() < 0.33) {
      textElem.innerHTML = "USER 3점슛을 성공!";
      userScore += 3;
    } else {
      textElem.innerHTML = "USER 3점슛을 실패!";
    }
  }
  userScoreElem.innerHTML = userScore;
  turnChange();
  btnLock(isComTurn);
};

//-----shot left
