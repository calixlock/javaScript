//-------------------------btn activation -----------------
let comBtnLock = (flag) => {
  let comBtns = document.querySelectorAll(".btn-com");
  for (let i = 0; i < comBtns.length; i++) {
    comBtns[i].disabled = flag;
  }
};
let userBtnLock = (flag) => {
  {
    let userBtns = document.querySelectorAll(".btn-user");
    for (let i = 0; i < userBtns.length; i++) {
      // 버튼 비활성화
      userBtns[i].disabled = flag;
      // 버튼 없애기
      // userBtns[i].style.display = "none";
    }
  }
};
//------- turn display & result display
let turnDisplay = (shotLeft) => {
  let shotLeftElem = document.querySelector("#shots-left");
  shotLeftElem.innerHTML = shotLeft;
  if (shotLeft === 0) {
    if (userScore > comScore) {
      showText("USER가 승리하였습니다");
    } else if (userScore < comScore) {
      showText("COM이 승리하였습니다");
    } else {
      showText("비겼습니다");
    }
    // 버튼 잠금

    for (let i = 0; i < comBtns.length; i++) {
      comBtns[i].disabled = true;
    }
  }
};

// -------------------initial settings --------------------------------
let isComTurn = true;
userBtnLock(isComTurn);
let shotLeft = 3;
turnDisplay(shotLeft);
let comScore = 0;
let userScore = 0;

// ---- showText ----
let showText = (text) => {
  let textElem = document.querySelector("#text");
  textElem.innerHTML = text;
};
// ----element -------------------------------------------------------
let comBtns = document.querySelectorAll(".btn-com");
//-------------------------turn change function------------
let turnChange = () => {
  isComTurn = !isComTurn;
  console.log(`comTurn : ${isComTurn}`);
};
//
let updateComScore = (score) => {
  comScore += score;
  let comScoreElem = document.querySelector("#com-score");
  comScoreElem.innerHTML = comScore;
};
let updateUserScore = (score) => {
  userScore += score;
  let userScoreElem = document.querySelector("#user-score");
  userScoreElem.innerHTML = userScore;
};
//-------------------------com part------------------------

let onComShoot = () => {
  if (!isComTurn) {
    showText("USER 차례입니다!");
    return;
  }
  //슛타입 50%확률로 결정
  let shootType = Math.random() < 0.5 ? 2 : 3;
  if (shootType === 2) {
    // 2점슛 성공확률 50%
    if (Math.random() < 0.5) {
      showText("COM 2점슛을 성공!");
      updateComScore(2);
    } else {
      showText("COM 2점슛을 실패!");
    }
  } else {
    // 3점 슛 성공확률 33%
    if (Math.random() < 0.33) {
      showText("COM 3점슛을 성공!");
      updateComScore(3);
    } else {
      showText("COM 3점슛을 실패!");
    }
  }

  // 턴 전환
  turnChange();
  // btnLock(isComTurn);
  comBtnLock(!isComTurn);
  userBtnLock(isComTurn);
  turnDisplay(shotLeft);
};
//-------------------------user part------------------------

let onUserShoot = (shootType) => {
  if (isComTurn) {
    showText("COM 차례입니다!");
    return;
  }

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("USER 2점슛을 성공!");
      updateUserScore(2);
    } else {
      showText("USER 2점슛을 실패!");
    }
  } else {
    // 3점 슛 성공확률 33%
    if (Math.random() < 0.33) {
      showText("USER 3점슛을 성공!");
      updateUserScore(3);
    } else {
      showText("USER 3점슛을 실패!");
    }
  }

  // 턴 전환
  turnChange();
  // btnLock(isComTurn);
  comBtnLock(!isComTurn);
  userBtnLock(isComTurn);
  shotLeft--;
  turnDisplay(shotLeft);
};
