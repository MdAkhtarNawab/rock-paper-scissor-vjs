const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

let player;
let computer;
let random;

rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorBtn.addEventListener("click", scissor);

function rock() {
  player = "rock";
  playerText.innerHTML = "rock";
  common();
  //   if (player == "rock" && computer == "rock") {
  //     return (resultText.innerHTML = "you have draw");
  //   }
  //   if (player == "rock" && computer == "paper") {
  //     return (resultText.innerHTML = "you lose");
  //   }
  //   if (player == "rock" && computer == "scissor") {
  //     return (resultText.innerHTML = "you have won");
  //   }

  // if(player=='rock'){
  //     if(computer=='rock'){
  //         return(resultText.innerHTML = "you have draw")
  //     }else if(computer=='paper'){
  //         return(resultText.innerHTML = "you lose")
  //     }else{
  //         return(resultText.innerHTML = "you have won")
  //     }
  // }

  player == "rock"
    ? computer == "rock"
      ? (resultText.innerHTML = "you have draw")
      : computer == "paper"
      ? (resultText.innerHTML = "you lose")
      : (resultText.innerHTML = "you win")
    : (resultText.innerHTML = "you win");
}

function paper() {
  player = "paper";
  playerText.innerHTML = "paper";
  common();
  //   if (player == "paper" && computer == "rock") {
  //     return (resultText.innerHTML = "you have won");
  //   }
  //   if (player == "paper" && computer == "paper") {
  //     return (resultText.innerHTML = "you have draw");
  //   }
  //   if (player == "paper" && computer == "scissor") {
  //     return (resultText.innerHTML = "you lose");
  //   }

  player == "paper"
    ? computer == "paper"
      ? (resultText.innerHTML = "you have draw")
      : computer == "scissor"
      ? (resultText.innerHTML = "you lose")
      : (resultText.innerHTML = "you win")
    : (resultText.innerHTML = "you win");
}

function scissor() {
  player = "scissor";
  playerText.innerHTML = "scissor";
  common();
  //   if (player == "scissor" && computer == "rock") {
  //     return (resultText.innerHTML = "you lose");
  //   }
  //   if (player == "scissor" && computer == "paper") {
  //     return (resultText.innerHTML = "you have won");
  //   }
  //   if (player == "scissor" && computer == "scissor") {
  //     return (resultText.innerHTML = "you have draw");
  //   }

  player == "scissor"
    ? computer == "scissor"
      ? (resultText.innerHTML = "you have draw")
      : computer == "rock"
      ? (resultText.innerHTML = "you lose")
      : (resultText.innerHTML = "you win")
    : (resultText.innerHTML = "you win");
}

function common() {
  random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissor";
      break;

    default:
      break;
  }
  computerText.innerHTML = computer;
}
