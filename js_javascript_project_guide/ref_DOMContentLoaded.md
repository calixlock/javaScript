### html code

```html
<body>
<!-- JavaScript가 HTML이 로드되기 전에 실행되므로 DOM 요소를 찾을 수 없다 -->
  <script src="./js/<js_file_path>.js">
  <div>--- 체크 ---</div>
  <div>
    <div class="userInput"></div>
    <div class="comInput"></div>;
  </div>
</body>
```

## 1. 해결방안

> js 위치 변경

```html
<body>

  <div>--- 체크 ---</div>
  <div>
    <div class="userInput"></div>
    <div class="comInput"></div>;
  </div>
  <!-- script 위치 변경 -->
  <script src="./js/<js_file_path>.js">
</body>
```

## 2. 해결방안

### js code

> `addEventListener` / `DOMContentLoaded`를 이용해 실행 순서 변경

```js
document.addEventListener("DOMContentLoaded", function () {
  let comInput;

  // let rndNum = Math.random();
  if (rndNum < 0.33) {
    comInput = "rock";
  } else if (rndNum < 0.66) {
    comInput = "scissors";
  } else {
    comInput = "paper";
  }
  // console.log(comInput);
  document.querySelector(".comInput").textContent = comInput;
});
```

###
