"use strict";
import { encode_key } from "../api/opendata.js";

let apiKey = encode_key;
let apiURL = "https://apis.data.go.kr/6300000/mdlcnst/getmdlcnst";
let maxTotal = "114";
let pageNo = "1";
let numOfRows = "100";

const url =
  apiURL +
  "?serviceKey=" +
  apiKey +
  "&pageNo=" +
  pageNo +
  "&numOfRows=" +
  numOfRows;

$(function () {
  $.ajax({
    url: url, // 공공데이터 API 엔드포인트 URL
    method: "GET", // GET 요청
    dataType: "json", // 응답 데이터 타입은 JSON
    success: function (response) {
      let list = response.response.body.items;
      console.log(list);
      let total = list.length; //parseInt(pageNo) * parseInt(numOfRows);

      $(".total").html("총 " + total + "개를 찾았습니다");

      let $list = $(".list");
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let $elem = $("#item-template").clone().removeAttr("id");

        $elem.find(".item-no").html(i + 1);
        $elem.find(".item-name").html(item.hsptlNm);
        $elem.find(".item-addr").html(item.locplc);
        $list.append($elem);

        //   // console.log(item.hsptlNm);
        //   // console.log(item.locplc);
      }
    },
    error: function (xhr, status, error) {
      // 요청 실패 시 실행되는 코드
      console.error("AJAX 오류:", status, error); // 에러 메시지를 콘솔에 출력
    },
  });
});

$(() => {});
