import { Bodies, Body, Engine, Render, Runner, World } from "matter-js";
import { FRUITS_BASE } from "./fruits";

// engine / render
const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: 1, // 그래픽OFF & frameOn
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
      Body.setPosition(currentBody, {
        x: currentBody.position.x - 10,
        y: currentBody.position.y,
      });
      break;
    case "ArrowRight":
      Body.setPosition(currentBody, {
        x: currentBody.position.x + 10,
        y: currentBody.position.y,
      });
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

addFruit();
