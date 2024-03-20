### 🔆 argument = (전달)인자 = 값

> - 함수를 호출할 때 값을 전달한다고 해서 전달인자라고도 부른다.

> - 매개변수와 달리 전달인자는 고정되어 있지 않고, 호출할 때마다 수시로 변하는 값(Value)이기 때문에 변수가 아닌 값(Value)으로 정의한다. 인수라고도 한다.

### 🔆 parameter = (매개)변수

> - 함수 내부에 있는 인자로, 특정한 값으로 정해져 있는 것이 아닌, 함수가 호출하면서 건네준 argument의 값이 변수에 담긴다.

> - 들어오는 인자가 매개체 역할을 하기 때문에 매개변수라 한다

```javascript
// a,b는 params(변수)
function plusFounction(a, b) {
  return a + b;
}
// 1,2는 args(인자)
plusFounction(1, 2);
```

---

### 🔆 function 표현

```js
// 기명함수 방식
let greet = function sayHello(params) {
  console.log("Hello!"+str(params));
};
// 익명함수 방식
let greet = function (params) {
  console.log("Hello!"str(params));
};
// 사용
let result = greet("AMJ"));

```

```js
// 화살표 함수정의
let greet = (params) => {
  console.log("Hello!" + str(params));
};
```

```js
// return 생략
let multiply = (x, y) => x * y;

let multiply2 = function (x, y) {
  return x * y;
};
```

---

#### 참고

- https://velog.io/@colki/JS-parameter-%EC%99%80-argument-%EC%9D%98-%EC%B0%A8%EC%9D%B4-%EC%9D%B8%EC%88%98-%EC%9D%B8%EC%9E%90
