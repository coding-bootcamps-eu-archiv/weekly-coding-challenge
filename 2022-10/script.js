const ttt = document.querySelector(".ttt");

let circle = true;
let counter = 0;

ttt.addEventListener("click", function (e) {
  const field = e.target;
  if (field.classList.contains("ttt-field") && field.classList.length === 1) {
    counter++;

    if (circle) {
      field.classList.add("ttt-field-circle");
    } else {
      field.classList.add("ttt-field-cross");
    }
    circle = !circle;

    // const winner = checkWinner()
    // if(winner === "o") {
    //     alert("hurra, o!")
    // } else if(winner === "x") {
    //     alert("hurra, x!")
    // }

    if (counter === 9) {
      alert("ENDE");
    }
  }
});

// function checkWinner() {
// }
