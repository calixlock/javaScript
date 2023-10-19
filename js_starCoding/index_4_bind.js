// 참고 : https://www.youtube.com/watch?v=j6VkGimAs-E
const object_4 = {
  name: "object 4th",
  testThis: function () {
    console.log(this);
  },
};

// testThis(); // window 시점
// console.log("------");
// object_4.testThis(); // object 시점

const testBind = testThis.bind({ prop_1: "1st", prop_2: "2nd" });
// testBind();

const testBind2 = object_4.testThis.bind({ name: "rr" });
// testBind2();
//----------------------------------------------------------------
const object_4_2 = {
  name: "object 4th & 2nd",
  testThis: function () {
    console.log(this);
  }.bind({ prop3: "3rd", prop4: "4th" }),
};
// object_4_2.testThis();
