const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('Rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('Paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('Scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  }
  else if (event.key === 'p') {
    playGame('Paper');
  }
  else if (event.key === 's') {
    playGame('Scissors');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  }
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML
    = `You ${playerMove} - ${computerMove} Computer`;


}

function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 600)
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}









