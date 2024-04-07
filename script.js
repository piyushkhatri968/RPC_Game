let you = 0;
let computer = 0;

let choices = document.querySelectorAll(".choice");
let gamemsg = document.querySelector("#gamemsg");
let user_count = document.querySelector("#for-user");
let com_count = document.querySelector("#for-com");

//draw condition
let draw_game = () => {
  console.log("Game draw! Try again");
};

//showwinner
let showwinner = (userwin) => {
  if (userwin) {
    // console.log("You Win!");
    gamemsg.innerHTML = "You Win!";
    you = you + 1;
    user_count.innerHTML = you;
    gamemsg.style.backgroundColor = "green";
  } else {
    // console.log("Computer Win!");
    gamemsg.innerHTML = "You lose!";
    computer = computer + 1;
    com_count.innerHTML = computer;
    gamemsg.style.backgroundColor = "red";
  }
};

//computer choice
let gencomchoice = () => {
  let options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

const playgame = (userchoice) => {
  // console.log("user choice:", userchoice);
  //generate computer choice
  let com_choice = gencomchoice();
  // console.log("computer choice:", com_choice);

  if (userchoice == com_choice) {
    draw_game();
    gamemsg.innerHTML = "Game draw! Try again";
    gamemsg.style.backgroundColor = "rgb(48, 1, 92)";
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // paper, scissor
      userwin = com_choice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissor
      userwin = com_choice == "scissor" ? false : true;
    } else {
      //user==scissor
      // rock, paper
      userwin = com_choice == "rock" ? false : true;
    }
    showwinner(userwin);
  }
};
// user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
