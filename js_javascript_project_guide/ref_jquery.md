### JQuery

---

- https://releases.jquery.com/

  - ## uncompressed
    - 비압축 상태.
      - 코드를 쉽게 이해할 수 있고 브레이크포인트 걸기 쉽다.
        > - 개발용
  - ## minified
    - 압축된 상태.
      - 코드가 최소한의 글자로 구성.
      - 네트워크 다운로드 속도 빠름.
        > - 배포용
  - ## slim

    - Ajax. Effects 기능 제외된 가벼운 버젼

  - ## slim minified
    - slim의 압축용 버전

---

```html
<!-- uncomressed  -->
<script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"
></script>

<!-- minified -->
<script
  src="https://code.jquery.com/jquery-3.7.1.min.js"
  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
  crossorigin="anonymous"
></script>

<!-- slim -->
<script
  src="https://code.jquery.com/jquery-3.7.1.slim.js"
  integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc="
  crossorigin="anonymous"
></script>

<!-- slim minified -->
<script
  src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
  integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
  crossorigin="anonymous"
></script>
```
