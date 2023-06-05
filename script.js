const choices = ["paper", "rock", "scissors"];
let playerScore = 0;
let computerScore = 0;

game();

function game() {
    for (let round = 1; round < 6; round++) {
        console.log(`Round ${round}`);
    
        const input = prompt("Do you choose rock, paper, or scissors?");
        if (input === null) {
            console.log("Sorry to see you go!");
            return;
        }
        const playerSelection = playerPlay(input);
        if (playerSelection === -1) { 
            console.log("Error! You need to choose either rock, paper, or scissors. Try again.");
            continue;
        }
    
        computerSelection = computerPlay();
    
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`Final scores - Player: ${playerScore}, Computer: ${computerScore}`);
}

function computerPlay() {
    return Math.floor(Math.random() * 3)
}

function playerPlay(name) {
    console.log(name)
    for (let index = 0; index < choices.length ; index++) {
        if (choices[index] === name.toLowerCase()) 
            return index;
    }

    return -1;
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return 'It is a tie!';
    if (playerSelection + computerSelection === 2)
        return playerSelection === 2 ? 'You win! ' + choices[playerSelection] + ' beats ' + choices[computerSelection] + '!' : 'You lose! ' + choices[computerSelection] + ' beats ' + choices[playerSelection] + '!' 
    if (playerSelection < computerSelection)
        return 'You win! ' + choices[playerSelection] + ' beats ' + choices[computerSelection] + '!';

    return 'You lose! ' + choices[computerSelection] + ' beats ' + choices[playerSelection] + '!';
}
