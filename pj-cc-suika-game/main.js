import { Bodies, Body, Engine, Events, Render, Runner, World } from "matter-js";
import { FRUITS_BASE } from "./fruits";

// engine / render
const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: 0, // 그래픽OFF & frameOn
    background: "#f7f4c8",
    width: 620,
    height: 850,
  },
});
// wallFrame
const world = engine.world;
const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: 1,
  render: {
    fillStyle: "#e6b143",
  },
});
const rightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: 1,
  render: {
    fillStyle: "#e6b143",
  },
});
const background = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: 1,
  render: {
    fillStyle: "#e6b143",
  },
});
const topLine = Bodies.rectangle(310, 150, 620, 2, {
  name: "topLine",
  isSensor: 1, // 감지
  isStatic: 1,
  render: {
    fillStyle: "#e6b143",
  },
});

World.add(world, [leftWall, rightWall, background, topLine]);

//----------------------------------------------------------------
Render.run(render);
Runner.run(engine);

let currentBody = null;
let currentFruit = null;
let disableAction = 0;
let interval = null;

//----------------------------------------------------------------
function addFruit() {
  const index = Math.floor(Math.random() * 5); // 0~5 index 생성
  const fruit = FRUITS_BASE[index];
  const body = Bodies.circle(300, 50, fruit.radius, {
    index: index,
    isSleeping: 1, // 물체 고정
    render: {
      sprite: { texture: `${fruit.name}.png` },
    },
    restitution: 0.3,
  });
  currentBody = body;
  currentFruit = fruit;

  World.add(world, body);
}
window.onkeydown = (event) => {
  if (disableAction) return;
  switch (event.code) {
    case "ArrowLeft":
      if (interval) return;

      interval = setInterval(() => {
        if (currentBody.position.x - currentFruit.radius > 30)
          Body.setPosition(currentBody, {
            x: currentBody.position.x - 5,
            y: currentBody.position.y,
          });
      }, 5);
      break;
    case "ArrowRight":
      if (interval) return;

      interval = setInterval(() => {
        if (currentBody.position.x + currentFruit.radius < 590)
          Body.setPosition(currentBody, {
            x: currentBody.position.x + 5,
            y: currentBody.position.y,
          });
      }, 2);
      break;
    case "ArrowDown":
      disableAction = 1;
      currentBody.isSleeping = 0;
      setTimeout(() => {
        addFruit();
        disableAction = 0;
      }, 1000); //1s delay
      break;
  }
};
// 인터벌 효과 제어
window.onkeyup = (event) => {
  switch (event.code) {
    case "ArrowLeft":
    case "ArrowRight":
      clearInterval(interval);
      interval = null;
  }
};

// collision decision > matterJs 이용
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA.index === collision.bodyB.index) {
      const index = collision.bodyA.index;

      World.remove(world, [collision.bodyA, collision.bodyB]);
      // 마지막 과일인 경우 생성 x
      if (index === FRUITS_BASE.length - 1) return;
      // 같은 과일 충돌시 합성 과일 생성
      const newFruit = FRUITS_BASE[index + 1];

      const newBody = Bodies.circle(
        collision.collision.supports[0].x,
        collision.collision.supports[0].y,
        newFruit.radius,
        {
          index: index + 1,
          render: {
            sprite: { texture: `${newFruit.name}.png` },
          },
        }
      );
      World.add(world, newBody);
    }

    if (
      !disableAction &&
      (collision.bodyA.name === "topLine" || collision,
      bodyB.name === "topLine")
    ) {
      alert("GameOver");
    }
  });
});
addFruit();
