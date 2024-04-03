"use strict";

// $(() => {
//   $(".btn-search").click(() => {
//     console.log("search 클릭");
//   });
// });
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const baseApiUrl = "http://apis.data.go.kr/6300000/mdlcnst";
$(function () {
  $.ajax({
    url: baseApiUrl, // 공공데이터 API 엔드포인트 URL
    method: "GET", // GET 요청
    dataType: "jsonp", // 응답 데이터 타입은 JSON
    success: function (response) {
      // 요청 성공 시 실행되는 코드
      console.log(response); // 응답 데이터를 콘솔에 출력
      // 여기서 응답 데이터를 사용하여 작업을 수행할 수 있습니다.
    },
    error: function (xhr, status, error) {
      // 요청 실패 시 실행되는 코드
      console.error(status, error); // 에러 메시지를 콘솔에 출력
    },
  });
});
