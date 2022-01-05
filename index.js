let cpuScore = 0;
let playerScore = 0;

function addScore(score) {
  score++;
}

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)]
}

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return 'it\'s a tie!';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      addScore(cpuScore);
      return 'you lose!, paper covers rock';
    } else if (computerSelection === 'scissors') {
      
      return 'you win!, rock smashes scissors';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      
      return 'you win!, paper covers rock';
    } else if (computerSelection === 'scissors') {
      
      return 'you lose!, scissors cuts paper';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      
      return 'you lose!, rock smashes scissors';
    } else if (computerSelection === 'paper') {
      
      return 'you win!, scissors cuts paper';
    }
  }

  
}

function game() {
  const playerSelection = prompt('rock, paper or scissors?');
  const computerSelection = computerPlay();
  console.log('player\'s choice: ' + playerSelection.toLowerCase() + '\nCPU\'s choice: ' + computerSelection + '\n' + play(playerSelection, computerSelection));
}

for(let i = 0; i < 5; i++) {
  game();
}