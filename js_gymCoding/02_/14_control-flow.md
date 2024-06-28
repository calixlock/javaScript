- control flow : 제어문

  - conditional statement : 조건문
    - if
      - `<`, `>`,`<=`, `>=`,`==`,`!=` : 비교 연산자
      - `&&`,`||`,`!` : 논리 연산자 ( `and`,`or`,`not` )
      - `if`,`else if`,`else`
      - <span style="color:#ffd33d">값이 존재할 경우</span> : `true`
        - `숫자`,`문자`,`1`
      - <span style="color:#ffd33d">값이 없는 경우</span> : `false`
        - `0`,`-0`,`0n`,`null`,`undefined`,`""(빈 문자열)`,`NaN`,
    - switch
      - `case` `value` : 일치 시 해당하는 명령 수행.
      - `break` : switch문 종료.
      - `break`가 없는 경우
        - case value가 일치한 순서부터 모든 명령 수행.
      - `default` : 일치하는 case value가 없는 경우 수행.
  - loop statement : 반복문

    - `for`
      - `초기화`,`조건`,`표현`
        ```javascript
        for (let i = 0; i < 5; i++) {
          console.log(i);
        }
        ```
    - `for-in`

      - 객체의 내부 속성(key:value)들을 반복 수행
      - 객체의 모든 열거 가능한 속성에 대해 반복
      - ES6 부터 가능

      ```javascript
      let person_01 = {
        name: "kim",
        age: 29,
        locate: "seoul",
      };
      for (let item in person_01) {
        console.log(`key: ${item} value: ${person_01[item]}`);
      }
      ```

      - `for-of`

        - 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야 함
        - 일반적으로 `Array` = 배열

        ```javascript
        let person_01 = {
          name: "kim",
          age: 29,
          locate: "seoul",
        };
        for (let [key, value] of Object.entries(person_01)) {
          console.log(`key : ${key}\t value : ${value}`);
        }
        ```

      - `forEach`
        - `currentValue`: 현재 처리 중인 요소의 값.
        - `index` (선택적): 현재 처리 중인 요소의 인덱스.
        - `array` (선택적): forEach()를 호출한 배열 객체.
        - `thisArg` (선택적): 콜백 함수 내부에서 this로 사용할 객체.
        ```js
        // 형태
        array.forEach(function (currentValue, index, array) {
          // 실행할 코드 입력
        }, thisArg);
        // example
        let colors = ["red", "green", "blue"];
        colors.forEach(function (color, index) {
          console.log(`Color at index ${index}: ${color}`);
        });
        ```

    - while

      - 조건문이 `true`일 때 실행 `false` 멈춤
      - 반복 횟수보다 조건 만족이 중요할 때
        ```javascript
          while(조건) {
            조건을 만족하기 위한 노력
          };
        ```

    - do-while
      - do : 최초 1번은 무조건 실행 / 조건 true시 반복
        ```javascript
        do {
          일단 실행하고 조건은 그 다음에 체크
        } while (조건);
        ```

  - branching statement : 분기문
    - break
      - 반복문 종료
    - continue
      - for문 내 continue 만나면 아래 문장 생략 후 다음 반복 실행
