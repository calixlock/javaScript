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
    if (user.score > com.score) {
      showText("USER가 승리하였습니다");
    } else if (user.score < com.score) {
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
// object
let com = {
  score: 0,
  point_2: 0.5,
  point_3: 0.33,
};
let user = {
  score: 0,
  point_2: 0.5,
  point_3: 0.33,
};
let game = {
  isComTurn: true,
  shotLeft: 3,
};
userBtnLock(game.isComTurn);
turnDisplay(game.shotLeft);

// ---- showText ----
let showText = (text) => {
  let textElem = document.querySelector("#text");
  textElem.innerHTML = text;
};
// ----element -------------------------------------------------------
let comBtns = document.querySelectorAll(".btn-com");
//-------------------------turn change function------------
let turnChange = () => {
  game.isComTurn = !game.isComTurn;
  // console.log(`comTurn : ${game.isComTurn}`);
  comBtnLock(!game.isComTurn);
  userBtnLock(game.isComTurn);
};
//
let updateComScore = (score) => {
  com.score += score;
  let comScoreElem = document.querySelector("#com-score");
  comScoreElem.innerHTML = com.score;
};
let updateUserScore = (score) => {
  user.score += score;
  let userScoreElem = document.querySelector("#user-score");
  userScoreElem.innerHTML = user.score;
};
//-------------------------com part------------------------

let onComShoot = () => {
  updateAi();
  if (!game.isComTurn) {
    showText("USER 차례입니다!");
    return;
  }
  //슛타입 50%확률로 결정
  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (Math.random() < com["point_" + shootType]) {
    showText("COM " + shootType + "점슛을 성공!");
    updateComScore(shootType);
  } else {
    showText("COM " + shootType + "점슛을 실패!");
  }

  // 턴 전환
  turnChange();
  // btnLock(isComTurn);

  turnDisplay(game.shotLeft);
};
//-------------------------user part------------------------

let onUserShoot = (shootType) => {
  if (game.isComTurn) {
    showText("COM 차례입니다!");
    return;
  }

  if (Math.random() < user["point_" + shootType]) {
    showText("USER " + shootType + "점슛을 성공!");
    updateComScore(shootType);
  } else {
    showText("USER " + shootType + "점슛을 실패!");
  }

  // 턴 전환
  turnChange();
  // btnLock(isComTurn);
  game.shotLeft--;
  turnDisplay(game.shotLeft);
};
//---- com AI ----
let updateAi = () => {
  let diff = user.score - com.score;
  if (diff >= 10) {
    point_2 = 0.6;
    pointScore3 = 0.38;
  } else if (diff >= 6) {
    point_2 = 0.4;
    pointScore3 = 0.33;
  } else if (diff <= -10) {
    point_2 = 0.3;
    pointScore3 = 0.28;
  } else if (diff <= -6) {
    point_2 = 0.4;
    pointScore3 = 0.28;
  }
};
