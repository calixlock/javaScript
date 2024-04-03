import { kakao_rest_api } from "../api/kakao.js";
let REST_API_KEY = kakao_rest_api;
// console.log(REST_API_KEY);
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book",
  data: { query: "it" },
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
}).done(function (msg) {
  alert("Data Saved: " + msg);
});
