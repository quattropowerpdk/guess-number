"use strict";

//Selecting elements

const hiddenNumber = document.querySelector(".hidden_number");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoring = 20;
let high = 0;

checkButton.addEventListener("click", function () {
  const userGuess = Number(guess.value);

  //If is no number
  if (!userGuess) {
    message.textContent = "No number 🚩";
  }

  //If secretNumber === userGuess
  else if (userGuess === secretNumber) {
    message.textContent = "YOU WIN!!! 🥇";
    message.style.fontSize = "4rem";
    document.querySelector("body").style.backgroundColor = "green";
    hiddenNumber.textContent = secretNumber;
    if (scoring > high) {
      //   high = scoring;
      highScore.textContent = scoring;
    }
  }

  //If secretNumber !== userGuess
  else if (userGuess !== secretNumber) {
    //Scoring

    if (scoring > 1) {
      scoring--;
      score.textContent = scoring;
    } else {
      score.textContent = 0;
      message.textContent = "You lose 😥";
      message.style.fontSize = "4rem";
      document.querySelector("body").style.backgroundColor = "red";
    }

    //If number is to big or to small
    message.textContent =
      userGuess < secretNumber ? "Number too small 📈" : "Number too big 📉";
  }
});

//Again button

againButton.addEventListener("click", function () {
  scoring = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = "";
  score.textContent = scoring;
  document.querySelector("body").style.backgroundColor = "white";
  message.style.fontSize = "3rem";
  message.textContent = "Start guessing...";
  hiddenNumber.textContent = "?";
});
