// 개발자 도구 차단 방법1 - f12키 차단
(function () {
  const threshold = 160; // 개발자 도구가 열렸을 때 감지할 창 크기 임계값

  // 개발자 도구 열림을 감지하는 함수
  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
      // 개발자 도구가 열렸을 때 창을 닫습니다.
      alert("개발자 도구가 열렸습니다. 도구를 닫습니다.");
      window.open("", "_self", ""); // self-referencing to allow closing the window
      window.close(); // 창을 닫습니다.
    }
  }
  // 주기적으로 개발자 도구 열림을 감지
  setInterval(detectDevTools, 1000);
})();
