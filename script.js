let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll("img");
const msg = document.getElementById("message");
const scoreU = document.querySelector(".scoreU");
const scoreC = document.querySelector(".scoreC");

// computer choice
const genCompCh = () => {
  const option = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return option[idx];
};

const draw = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    scoreU.innerText = userScore;
    console.log("YOU WIN");
    msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    botScore++;
    scoreC.innerText = botScore;
    console.log("YOU LOSE");
    msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const play = (userChoice) => {
  // user's choice:
  console.log("user Choice : ", userChoice);
  // comp choice:
  const compChoice = genCompCh();
  console.log("Computer Choice : ", compChoice);

  if (userChoice === compChoice) {
    // draw
    draw();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

// on click function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    play(userChoice);
  });
});
