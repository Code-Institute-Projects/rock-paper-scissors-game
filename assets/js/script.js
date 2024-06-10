// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* code source: https://stackoverflow.com/questions/76196162/function-that-gets-button-click  + love maths project */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
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


function checkAnswer(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
        return "win";
    } else {
        return "lose";
    }
}



function calculateComputerChoice() { 
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function updateScore(result) {
    if (result === "win") {
        let wins = parseInt(document.getElementById("wins").innerText);
        document.getElementById("wins").innerText = ++wins;
    } else if (result === "lose") {
        let losses = parseInt(document.getElementById("losses").innerText);
        document.getElementById("losses").innerText = ++losses;
    } else if (result === "draw") {
        let draws = parseInt(document.getElementById("draws").innerText);
        document.getElementById("draws").innerText = ++draws;
    }
}

function reduceTries() {
    let tries = parseInt(document.getElementById("tries-count").innerText);
    document.getElementById("tries-count").innerText = --tries;
}

function resetGame() {
    document.getElementById("wins").innerText = "0";
    document.getElementById("losses").innerText = "0";
    document.getElementById("draws").innerText = "0";
    document.getElementById("tries-count").innerText = "10";
    document.getElementById("user-choice").innerText = "You chose: ";
    document.getElementById("computer-choice").innerText = "Computer chose: ";
    document.getElementById("result").innerText = "Result: ";
}


function displayResult(result) {
    function displayResult(result) {
        document.getElementById("result").innerText = `Result: ${result}`;
}






