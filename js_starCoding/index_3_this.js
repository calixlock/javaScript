// 참고 : https://www.youtube.com/watch?v=j6VkGimAs-E

function testThis() {
  console.log(this);
}

const object_3 = {
  name: "starCoding",
  testThis,
  // testThis: function () {
  //   console.log(this);
  // },
  object_3_1: {
    name: "2nd",
    testThis,
  },
};
//----------------------------------------------------------------
// object_1.f_1();
// console.log("-------");
// console.log(object_1.f_1);
// console.log("-------");
// console.log(object_1.f_1.name);
// console.log("-------");
// console.log(object_1.f_1());

//----------------------------------------------------------------
// object_3.testThis();
// console.log("-----------");
// object_3.object_3_1.testThis();
