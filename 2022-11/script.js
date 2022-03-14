const main = document.querySelector("main");

let counter = 0;
let score = 0;
let lastCard = null;

main.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("card") &&
    e.target.classList.contains("card-matched") === false
  ) {
    const card = e.target;
    card.classList.add("card-visible");
    counter++;

    if (lastCard === null) {
      lastCard = card;
    } else {
      if (lastCard.innerText === card.innerText) {
        // Match

        card.classList.add("card-matched");
        lastCard.classList.add("card-matched");

        lastCard = null;
        score++;
        renderScore();
      } else {
        // Kein Match

        setTimeout(function () {
          card.classList.remove("card-visible");
          lastCard.classList.remove("card-visible");
        }, 1000);
      }
    }
  }
});

function renderScore() {
  const scoreEl = document.querySelector("#score");
  scoreEl.innerText = score;
}

renderScore();
