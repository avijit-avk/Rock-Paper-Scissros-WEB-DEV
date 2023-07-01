let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.querySelector('.result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}
