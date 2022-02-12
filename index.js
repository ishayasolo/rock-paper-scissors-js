var cpuScore = 0;
var playerScore = 0;

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
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
  const mainContainer = document.getElementById('main-container');
  const resultContainer = document.createElement('div');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const paragraph4 = document.createElement('p');
  const paragraph5 = document.createElement('p');
  const paragraph6 = document.createElement('p');
  const lineBreak = document.createElement('br');

  const buttons = mainContainer.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (playerScore < 5 && cpuScore < 5) {
        const computerSelection = computerPlay();
        const playerSelection = button.value;
        
        paragraph1.textContent = `player's choice: ${playerSelection}`;
        resultContainer.appendChild(paragraph1);

        paragraph2.textContent = `CPU's choice: ${computerSelection}`;
        resultContainer.appendChild(paragraph2);
        
        paragraph3.textContent = `${playRound(playerSelection, computerSelection)}`;
        resultContainer.appendChild(paragraph3);
        
        resultContainer.appendChild(lineBreak);
        
        paragraph4.textContent = `your score: ${playerScore}`;
        resultContainer.appendChild(paragraph4);

        paragraph5.textContent = `CPU's score: ${cpuScore}`;
        resultContainer.appendChild(paragraph5);

        if (playerScore == 5) {
          paragraph6.textContent = 'congratulations!, you have won the game';
          resultContainer.appendChild(paragraph6);
        } else if (cpuScore == 5) {
          paragraph6.textContent = 'better luck next time...you lost the game to CPU';
          resultContainer.appendChild(paragraph6);
        }
      }
    });
  });
  
  mainContainer.appendChild(resultContainer);
}

game();