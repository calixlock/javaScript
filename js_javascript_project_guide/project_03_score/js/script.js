//-------------------------btn activation -----------------
let comBtnLock = (flag) => {
  $(".btn-com").prop("disabled", flag);
};
let userBtnLock = (flag) => {
  $(".btn-user").prop("disabled", flag);
};
//------- turn display & result display
let turnDisplay = (shotLeft) => {
  let shotLeftElem = $("#shots-left");
  shotLeftElem.html(shotLeft);

  if (shotLeft === 0) {
    if (user.score > com.score) {
      showText("USER가 승리하였습니다");
    } else if (user.score < com.score) {
      showText("COM이 승리하였습니다");
    } else {
      showText("비겼습니다");
    }
    // 버튼 잠금 // prop를 통해 속성값 전환
    $(".btn-com").prop("disabled", true);
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
  let textElem = $("#text");
  textElem.fadeOut(300, () => {
    textElem.html(text);
    textElem.fadeIn(100);
  });
};

// ----element -------------------------------------------------------
let comBtns = $(".btn-com");
//-------------------------turn change function------------
let turnChange = () => {
  game.isComTurn = !game.isComTurn;
  // console.log(`comTurn : ${game.isComTurn}`);
  comBtnLock(!game.isComTurn);
  userBtnLock(game.isComTurn);
  turnDisplay(game.shotLeft);
};
//
let updateComScore = (score) => {
  com.score += score;
  let comScoreElem = $("#com-score");

  comScoreElem.animateNumber({
    number: com.score,
  });
};
let updateUserScore = (score) => {
  user.score += score;
  let userScoreElem = $("#user-score");
  userScoreElem.animateNumber({
    number: user.score,
  });
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
};
//-------------------------user part------------------------

let onUserShoot = (shootType) => {
  if (game.isComTurn) {
    showText("COM 차례입니다!");
    return;
  }

  if (Math.random() < user["point_" + shootType]) {
    showText("USER " + shootType + "점슛을 성공!");
    updateUserScore(shootType);
  } else {
    showText("USER " + shootType + "점슛을 실패!");
  }
  // 턴 전환
  game.shotLeft--;
  turnChange();
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
