### 스크립트

```html
<script src="<file-path/file-name>.js" type="text/javascript"></script>
```

### `<head>` 태그 내에 JavaScript 코드를 넣는 경우

- 페이지가 로드될 때 <head> 안의 코드가 먼저 실행됨.
- `외부 파일을 로드` / `페이지의 초기 설정` 및 `변수 선언` 등을 하는데 사용됨.
- 페이지의 내용이 로드되기 전에 실행되기 때문에,
- DOM 요소에 접근하려고 할 때는 주의해야 합니다.
- 만일 페이지의 내용이 아직 로드되지 않았다면, 해당 요소에 접근할 수 없다.
  - prompt 작동x

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript Example</title>

  <!-- JavaScript 코드를 넣는다 -->
  <script>
    // 페이지가 로드될 때 초기 설정을 수행한다.
    // 예를 들어, 변수를 초기화하거나 외부 파일을 로드한다.
    console.log("이 코드는 페이지가 로드될 때 실행됩니다.");
  </script>
</head>
```

### `<body>` 태그 내에 JavaScript 코드를 넣는 경우:

- 페이지가 로드된 후 <body> 안의 코드가 실행됨.
- 주로 사용자 인터랙션에 반응하는 이벤트 처리기나 페이지 내용을 조작하는 등의 작업에 사용된다.
- 페이지의 내용이 이미 로드된 후에 실행되기 때문에 DOM 요소에 쉽게 접근가능.

```html
<body>
  <!-- 페이지 내용 -->

  <!-- JavaScript 코드를 넣는다 -->
  <script>
    // 페이지 내용이 로드된 후 실행됩니다.
    // 예를 들어, 페이지 요소를 조작하거나 이벤트를 처리합니다.
    document.addEventListener("DOMContentLoaded", function () {
      console.log("이 코드는 페이지 내용이 로드된 후 실행됩니다.");
    });
  </script>
</body>
```
