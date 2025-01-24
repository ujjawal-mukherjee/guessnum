let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.gueeses');
const remaining = document.querySelector('.lastresult');
const loworhigh = document.querySelector('.loworhigh');
const startover = document.querySelector('.resultparas');
const p = document.createElement('p');
let prevguess = [];
let newguess = 1;
let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value);
        validateguess(guess)
    })
}
function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number greter than 100');
    } else if (guess > 100) {
        alert('please enter a number less than 100');
    } else {
        prevguess.push(guess);
        if (newguess === 11) {
            displayguess(guess)
            displaymessage(`game over random number is ${randomnumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess) {
    if (guess === randomnumber) {
        displaymessage(`you guessed it right`)
        endgame()
    } else if (guess < randomnumber) {
        displaymessage(`number is low`)
    } else if (guess > randomnumber) {
        displaymessage(`number is high`)
    }
}
function displayguess(guess) {
    userinput.value = ''
    guessslot.innerHTML += ` ${guess} `
    newguess++;
    remaining.innerHTML = `${11 - newguess}`
}
function displaymessage(message) {
    loworhigh.innerHTML = `<h2>${message} </h2>`
}
function endgame() {
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    attachNewGameListener(); // Attach the event listener for new game button
}

function attachNewGameListener() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function (e) {
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        newguess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${10 - newguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}
