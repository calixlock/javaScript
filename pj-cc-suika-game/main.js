import { Bodies, Engine, Render, Runner, World } from "matter-js";
// engine / render
const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: 0, // 개발자 : 구조 그래픽 단순화 및 확인
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
  isStatic: 1,
  render: {
    fillStyle: "#e6b143",
  },
});

World.add(world, [leftWall, rightWall, background, topLine]);

// --------------------------------
Render.run(render);
Runner.run(engine);
