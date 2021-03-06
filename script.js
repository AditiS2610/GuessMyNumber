"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "ð¥³ð¥³ Correct Number!";
// console.log(
//     (document.querySelector(".message").textContent = "ð¥³ð¥³ Correct Number!")
// );

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = " âNo Numbers";

        displayMessage(" âNo Numbers");

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "ð¥³ð¥³ Correct Number!";

        displayMessage("ð¥³ð¥³ Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            // guess > secretNumber ? "ð Too High!" : "ð Too Low!";
            displayMessage(guess > secretNumber ? "ð Too High!" : "ð Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "ð¥You lost the game";
            displayMessage("ð¥ You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "ð Too High!";
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     } else {
        //         document.querySelector(".message").textContent = "ð¥You lost the game";
        //         document.querySelector(".score").textContent = 0;
        //     }
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "ð Too Low!";
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     } else {
        //         document.querySelector(".message").textContent = "ð¥You lost the game";
        //         document.querySelector(".score").textContent = 0;
        //     }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start Guessing";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
});
