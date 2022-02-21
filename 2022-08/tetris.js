let block = { x: 0, y: 0 };
let height = 300;
let width = 200;
let blockSize = 20;
let blocks = [];
let colors = ["hotpink", "lemonchiffon", "salmon"];

function setup() {
  createCanvas(width, height);
  background(0);
  noStroke();
  frameRate(5);

  block.c = random(colors);
}

function draw() {
  background(0);
  fill(block.c);
  rect(block.x, block.y, blockSize, blockSize);
  if (block.y < height - blockSize) {
    block.y += blockSize;
  } else {
    // Alter Block unten angekommen
    blocks.push(block);
    // Neuer Block kann an den Start
    block = { y: 0, x: 0, c: random(colors) };
    console.log(blocks);
  }

  for (let i = 0; i < blocks.length; i++) {
    fill(blocks[i].c);
    rect(blocks[i].x, blocks[i].y, blockSize, blockSize);
  }
}

function keyPressed(e) {
  const pressedKey = e.code;

  if (pressedKey === "ArrowRight") {
    if (block.x < width - blockSize) {
      block.x += blockSize;
    }
  }

  if (pressedKey === "ArrowLeft") {
    if (block.x > 0) {
      block.x -= blockSize;
    }
  }
}
