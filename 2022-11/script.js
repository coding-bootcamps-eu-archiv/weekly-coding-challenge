const main = document.querySelector("main");

let score = 0;
let lastCard = null;
let gameOn = true;

main.addEventListener("click", memory);

function memory(e) {
  if (
    e.target.classList.contains("card") &&
    e.target.classList.contains("card-matched") === false &&
    gameOn === true
  ) {
    console.log("adsfasdfadsf");
    const card = e.target;
    card.classList.add("card-visible");

    if (lastCard === null) {
      lastCard = card;
    } else {
      if (lastCard.innerText === card.innerText) {
        card.classList.add("card-matched");
        lastCard.classList.add("card-matched");
        lastCard = null;
        score++;
        renderScore();
      } else {
        gameOn = false;
        setTimeout(function () {
          card.classList.remove("card-visible");
          lastCard.classList.remove("card-visible");
          lastCard = null;
          gameOn = true;
        }, 1000);
      }
    }
  }
}

function renderScore() {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = score;
}

function shuffle() {
  const l = main.children.length;
  let imageI = 0;
  for (let i = 0; i < l; i = i + 2) {
    console.log(i);
    main.children[i].style.backgroundImage = "url(img/" + [imageI] + ".jpeg)";
    main.children[i + 1].style.backgroundImage =
      "url(img/" + [imageI] + ".jpeg)";

    imageI++;
  }

  for (let i = 0; i < l; i++) {
    main.insertBefore(
      main.children[randomNumber(0, l - 1)],
      main.children[randomNumber(0, l - 1)]
    );
  }

  for (let i = 0; i < l; i++) {
    main.children[i].id = i + 1;
  }
}

shuffle();

renderScore();

function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}
