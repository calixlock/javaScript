// kakao api
import { kakao_rest_api } from "../api/kakao.js";
let REST_API_KEY = kakao_rest_api;
// $(() => {
//   $("#search-btn").click(() => {
//     console.log($("#search-input").val());
//   });
// });
// dom content loaded 상태 중요
$(() => {
  $("#search-btn").click(() => {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book",
      data: { query: $("#search-input").val() },
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
      error: function (xhr, status, error) {
        // 실패했을 때 실행되는 코드
        console.error("에러 발생:", status, error);
        // 추가적으로 에러 메시지를 사용자에게 표시할 수 있습니다.
        alert("에러 발생: " + error);
      },
    }).done(function (msg) {
      console.log(msg);
      $(".book-title").append("<div>" + msg.documents[0].title + "</div>");
      $(".book-image").append(
        "<img src='" + msg.documents[0].thumbnail + "'/>"
      );
    }).error;
  });
});
