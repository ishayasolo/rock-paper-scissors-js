var cpuScore = 0;
var playerScore = 0;

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)]
}

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return `it's a tie!`;
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      cpuScore++;
      return `you lose!, paper covers rock`;
    } else if (computerSelection === 'scissors') {
      playerScore++;
      return `you win!, rock smashes scissors`;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return `you win!, paper covers rock`;
    } else if (computerSelection === 'scissors') {
      cpuScore++;
      return `you lose!, scissors cuts paper`;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      cpuScore++;
      return `you lose!, rock smashes scissors`;
    } else if (computerSelection === 'paper') {
      playerScore++;
      return `you win!, scissors cuts paper`;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('rock, paper or scissors?');
    let computerSelection = computerPlay();
    console.log(`player\'s choice: ${playerSelection.toLowerCase()}\nCPU\'s choice: ${computerSelection}\n${play(playerSelection, computerSelection)}`);
  }
  console.log('player\'s score:', playerScore);
  console.log('CPU\'s score:', cpuScore);

  if (playerScore > cpuScore) {
    console.log('congratulations!...you have won the game');
  } else {
    console.log('you lost the game!');
  }
}

game();