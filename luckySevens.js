function rollDice(minimum, maximum) {
    return Math.ceil(Math.random() * (1 + maximum - minimum));
}

function playLuckySevens() {
    validateBet();
    var startingBet = document.forms["luckySevens"]["startingBet"].value;
    var gameMoney = Number(startingBet);
    var rollCount = 0;
    var highestAmountWon = gameMoney;
    var rollCountHighestWon = 0;

    while (Number(gameMoney) > 0) {
        var diceTotal = rollDice(1, 6) + rollDice(1, 6);
        rollCount = rollCount + 1;
        
        if (diceTotal == 7) {
            gameMoney = gameMoney + 4;

        }
        else {
            gameMoney = gameMoney - 1;
        }
        if (gameMoney > highestAmountWon) {
            highestAmountWon = gameMoney;
            rollCountHighestWon = rollCount;
        }
        console.log(rollCount + " " + gameMoney + " ");

    }
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("startBet").innerText = Number(startingBet);
    document.getElementById("rollCount").innerText = rollCount;
    document.getElementById("highestAmountWon").innerText = Number(highestAmountWon);
    document.getElementById("rollCountHighestWon").innerText = rollCountHighestWon;

    return false;
}


function validateBet() {
    var startingBet = document.forms["luckySevens"]["startingBet"].value;
    if (Number(startingBet) <= 0 || startingBet == "") {
        alert("Starting bet must be more than $0.00.")

        return false;
    }
}   