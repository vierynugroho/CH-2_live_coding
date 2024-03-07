//! Declaration Player Variable
//? use querySelector
// let img_P1 = document.querySelector('.img1');
// let img_P2 = document.querySelector('.img2');

//? use querySelectorAll
let img_P1 = document.querySelectorAll('img')[0];
let img_P2 = document.querySelectorAll('img')[1];

//! Declaration Random Data
//TODO: random number between 1-6
let random_P1 = Math.floor(Math.random() * 6) + 1;
let random_P2 = Math.floor(Math.random() * 6) + 1;

//TODO: random image generator by random number
let randomDiceImg_P1 = `./images/dice${random_P1}.png`;
let randomDiceImg_P2 = `./images/dice${random_P2}.png`;

//! Update dice image dom
img_P1.setAttribute('src', randomDiceImg_P1);
img_P2.setAttribute('src', randomDiceImg_P2);

//! Set winner
let winnerBoard = document.querySelector('h1');

if (random_P1 > random_P2) {
	winnerBoard.innerText = `Player 1 Win! 😋`;
} else if (random_P1 < random_P2) {
	winnerBoard.innerText = `Player 2 Win! 😜`;
} else if (random_P1 == random_P2) {
	winnerBoard.innerText = `Draw! 🤜🏻🤛🏻`;
}
