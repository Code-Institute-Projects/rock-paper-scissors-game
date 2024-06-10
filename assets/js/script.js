// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let dataType = this.getAttribute("data-type");
            if (dataType === "reset") {
                alert("Reset button clicked. The game will be reset.");
                resetGame();
            } else {
                let playerChoice = dataType;
                alert(`Button clicked: ${playerChoice}. Starting game.`);
                runGame(playerChoice);
            }
        });
    }


    runGame();
});
/*  code source: https://stackoverflow.com/questions/70815987/rock-paper-scissors-player-choice-always-returns-null-js */
/*  https://stackoverflow.com/questions/73015826/javascript-innertext */

function runGame(playerChoice = null) {
    if (playerChoice) {
        const computerChoice = calculateComputerChoice();
        const result = checkAnswer(playerChoice, computerChoice);
        displayChoices(playerChoice, computerChoice);
        displayResult(result);
        updateScore(result);
        reduceTries();


        if (document.getElementById("tries-count").innerText == "0") {
            alert("Game over! Resetting game.");
            resetGame();
        }
    }
}


function checkAnswer {}

function calculateComputerChoice(){}

function incrementScore(){}

function reduceTries() {}

function resetGame() {}

function handleButtonClick(){}

/* code source: https://stackoverflow.com/questions/76196162/function-that-gets-button-click */

function attachButtonEventListeners(){}

/* code source : https://stackoverflow.com/questions/57742395/how-do-i-make-a-function-that-reset-the-game-on-click */

function initializeGame() {}

