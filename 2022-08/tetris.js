let block = { x: 0, y: 0 };
let height = 300;
let width = 200;
let blockSize = 20;
let blocks = [];
let colors = ["hotpink", "lemonchiffon", "salmon"];
let gameover = false;
let points = 0;

function setup() {
  createCanvas(width, height);
  background(0);
  noStroke();
  frameRate(5);

  block.c = random(colors);
}

function draw() {
  background(0);

  text("Score: " + points, 140, 20);

  fill(block.c);
  rect(block.x, block.y, blockSize, blockSize);

  const maxY = getMaxYforX(block.x);

  if (maxY === 0) {
    background("black");
    fill("red");
    textSize(20);
    text("Game Over", 50, 50);
    gameover = true;
    return;
  }

  if (block.y < maxY) {
    // Block kann weiter nach unten wandern
    block.y += blockSize;
  } else {
    // block
    // blocks
    const filteredBlocks = blocks.filter((b) => b.x === block.x);
    if (filteredBlocks.length > 0) {
      const lastBlockInXAxis = filteredBlocks[filteredBlocks.length - 1];
      if (lastBlockInXAxis.c === block.c) {
        const index = blocks.indexOf(lastBlockInXAxis);
        blocks.splice(index, 1);
        // Alternative
        // blocks = blocks.filter((b) => b !== lastBlockInXAxis);
        points++;
      } else {
        blocks.push(block);
      }
    } else {
      blocks.push(block);
    }

    // Neuer Block kann an den Start
    const randomX = Math.floor(random(10)) * blockSize;
    block = { x: randomX, y: 0, c: random(colors) };
  }

  for (let i = 0; i < blocks.length; i++) {
    fill(blocks[i].c);
    rect(blocks[i].x, blocks[i].y, blockSize, blockSize);
  }
}

function getMaxYforX(x) {
  if (blocks.length > 0) {
    const filteredBlocks = blocks.filter((b) => b.x === x);
    if (filteredBlocks.length > 0) {
      return filteredBlocks[filteredBlocks.length - 1].y - blockSize;
    }
  }

  return height - blockSize;
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

function mousePressed() {
  if (gameover === true) {
    blocks = [];
    gameover = false;
  }
}
