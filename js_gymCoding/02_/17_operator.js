// && and  > t+t = t / t+f = f
// || or   > f+f = f / t+f = t
// ! not   > !f  = t / !t  = f
let flag = true;
console.log(flag);
console.log(!flag);
console.log(flag && !flag);
console.log(flag || !flag);

let btn = document.querySelector("#btn");
let email_el = document.querySelector("[name=email]");
let pwd_el = document.querySelector("[name=pwd]");
console.log(email_el);

btn.addEventListener("click", () => {
  let email = email_el.value;
  let pwd = pwd_el.value;
  console.log(`email : ${email}, pwd : ${pwd}`);
  // 유효성 검사
  if (email === "" || email.includes("@") === false) {
    alert("이메일이 유효하지 않습니다");
  } else if (pwd && (pwd.length >= 8 && pwd.length <= 16) === false) {
    alert("비밀번호는 8~16자 이내 입니다");
  } else if (!pwd) {
    alert("비밀번호가 유효하지 않습니다");
  } else alert("로그인 성공");
});

// 단축 비교  ( 계산순서 빠른순 )
// or > true || ? > true
// and > false && ? > false

let test = undefined;
if (test) {
  console.log("true");
} else {
  console.log(" undefined : false");
}

// 삼항연산
let num = 11;
let msg = null;
num % 2 === 1 ? (msg = "홀수") : (msg = "짝수");
console.log(`msg = ${msg}`);
