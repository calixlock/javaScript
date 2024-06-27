- data type

  - primitive type

    - 값이 `하나` 다
    - number
      - ± Infinity = ± 무한
      - 정수 / 실수
      - NaN = 숫자가 아닌 값
    - string
      - \`text_1\`
      - "text_2"
      - 'text_3'
    - boolean
      - true
      - false
    - null
      - 값이 없는 상태
      - 거짓(if)
      ```javascript
      let num_01 = null;
      ```
    - undefined

      - 값을 할당 하지 않은 상태
      - 거짓(if)

      ```javascript
      let num_02;
      ```

    - symbol

      - 유일한 값

      ```javascript
      const kim_01 = Symbol("kim sun woo");
      const kim_02 = Symbol("kim sun woo");
      console.log(kim_01 === kim_02);
      ```

  - object type
    - 값을 여러개 가질 수 있다.
      - 주소값(참조값)을 가진다.
    - array
      ```javascript
      const arr1 = [1, 2, 3];
      arr1.push(88);
      arr1.push("stringNum");
      arr1.push(function fun1() {
        console.log("arr");
      });
      ```
    - date
    - object
      ```javascript
      let obj_01 = {
        key_01: "value_01",
        name: "kim",
        age: 25,
        fun1() {
          console.log("arr");
        },
      };
      ```
    - math
    - etc...
