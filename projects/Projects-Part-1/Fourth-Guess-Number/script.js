let randomNum = parseInt((Math.random() * 20 + 1));
console.log(randomNum);
const submitButton = document.querySelector('#submit');
const userInput = document.querySelector('#userInput');
const guessSlot = document.querySelector('.previousGuess');
const remainingGuess = document.querySelector('.remainingGuess');
const LoworHigh = document.querySelector('.lowORhigh');
const startOver = document.querySelector('.resultDiv');
const previousRecord = document.querySelector('.record')
const guessRight = document.querySelector('.right')
const guessWrong = document.querySelector('.wrong')
const p = document.createElement('p');
let previousGuess = [];
let guessCount = 0;
let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const guessNum = parseInt(userInput.value);
        validGuess(guessNum);
    });
}

function validGuess(guessNum) {
    if (guessNum < 0 || guessNum > 20 || isNaN(guessNum)) {
        alert('Please Enter a Valid Number');
    } else {
        previousGuess.push(guessNum);
        if (guessCount === 10) {
            displayMessage(guessCount); 
            previousRecord.innerHTML  = `You failed to guess.The random number was ${randomNum}.Try again!`
            previousRecord.style.color = 'red'
            endGame();
        } else {
            displayGuess(guessNum);
            checkGuess(guessNum);
        }
    }
}

function checkGuess(guessNum) {
    if (guessNum === randomNum) {
        guessRight.innerHTML = (`You Guessed it Right. Congratulations!`);
        guessRight.style.color = '#06f11d'
        guessRight.style.fontSize = '18px'
        guessRight.style.fontWeight = 'bolder'
        endGame();
    } else if (guessNum < randomNum) {
        guessRight.innerHTML = 'You Guessed TOO LOW :('
        guessRight.style.color = 'wheat'
    } else if (guessNum > randomNum) {
        guessRight.innerHTML = 'You Guessed TOO HIGH :('
        guessRight.style.color = 'wheat'
    }
}

function displayGuess(guessNum) {
    userInput.value = '';
    guessSlot.innerHTML += `${guessNum}, `;
    guessCount++;
    remainingGuess.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
    LoworHigh.innerHTML = `${message}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Game OVER Start New Game :) !</h2>';
    p.style.textTransform = 'uppercase'
    p.style.cursor = 'pointer'
    p.style.fontSize = '20px'
    p.style.fontWeight = '800'
    p.style.textAlign = 'center'
    p.style.text = 'wrap'
    p.style.color = 'black'
    LoworHigh.innerHTML  = ''
   startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function (e) {
        randomNum = parseInt((Math.random() * 20 + 1));
        console.log(randomNum);
        previousGuess = [];
        guessCount = 1;
        guessSlot.innerHTML = '';
        remainingGuess.innerHTML = `${11 - guessCount}`;
        guessRight.innerHTML = ' '
        previousRecord.innerHTML = ''
        LoworHigh.innerHTML  = ''
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
