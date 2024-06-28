- copy

  - shallow copy : 얕은 복사

    ```javascript
    let src = ["1", "2", "3"];
    let target = src;
    target[0] = "4";
    console.log(`src:${src} target:${target}`);
    src[0] === target[0] ? 1 : 0; // 1(true)
    ```

  - deep copy : 깊은 복사

    ```javascript
    let src = ["1", "2", "3"];
    //method_01
    let target = [...src];
    //method_02
    let target_2 = Array.from(src);
    //method_03
    let target_3 = src.slice();
    target[0] = "4";
    console.log(`src:${src} target:${target}`);
    src[0] === target[0] ? 1 : 0; // 0(false)
    ```
