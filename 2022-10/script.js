const ttt = document.querySelector(".ttt");

let isCircle = true;
let counter = 0;
const circle = 1;
const winCircle = 3 * circle;
const cross = 9;
const winCross = 3 * cross;

const game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let winFields = null;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// returns winner or -1
function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const checkSum =
      game[winCondition[0]] + game[winCondition[1]] + game[winCondition[2]];
    if (checkSum === winCircle) {
      winFields = winCondition;
      return circle;
    } else if (checkSum === winCross) {
      winFields = winCondition;
      return cross;
    }
  }
  return 0;
}

ttt.addEventListener("click", function (e) {
  const field = e.target;
  if (field.classList.contains("ttt-field") && field.classList.length === 1) {
    counter++;

    // Array.prototype.indexOf.call($0.children, $0.children[0])

    const index = field.getAttribute("data-index");

    if (isCircle) {
      field.classList.add("ttt-field-circle");
      game[index] = circle;
    } else {
      field.classList.add("ttt-field-cross");
      game[index] = cross;
    }
    isCircle = !isCircle;

    const winner = checkWin();

    if (winner !== 0) {
      const winnerEl = document.querySelector("#winner");
      if (winner === circle) {
        winnerEl.innerText = "The Winner is Circle!";
        winnerEl.removeAttribute("hidden");
      } else if (winner === cross) {
        winnerEl.innerText = "The Winner is Cross!";
        winnerEl.hidden = false;
      }

      winFields.forEach((winField) => {
        const field = ttt.children[winField];
        field.classList.add("ttt-field-won");
      });
    }
  }
});
