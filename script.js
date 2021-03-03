'use strict'
//Selecting Elements
const score1 = document.querySelector('#score--0')
const score2 = document.querySelector('#score--1')
const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current1 = document.querySelector('#current--0')
const current2 = document.querySelector('#current--1')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

//Starting Conditions
score1.textContent = 0
score2.textContent = 0
dice.classList.add('hidden')

//Global Variables
const totalScore = [0,0]
let currentScore = 0;
let activePlayer = 0;

//Function For SwitchPlayer
function switchPlayer(){
	currentScore = 0
	document.getElementById(`current--${activePlayer}`).textContent = currentScore
	//Dynamically Changing Active player When The dice is 1
	if (activePlayer == 0) {
		activePlayer = 1;
	}
	else {
		activePlayer = 0;
	}
	//Changing The Active Player BackGround
	player1.classList.toggle('player--active')
	player2.classList.toggle('player--active')
}

//Rolling Button Funtionality
btnRoll.addEventListener('click', () => {
	let randomNumber = Math.trunc(Math.random() * 6) + 1

	//Dynamically Load the images upon random Number
	dice.src = `images/dice-${randomNumber}.png`

	/*If the dice is = 1 then switch Current player 
		else add dice to the current score*/
	if (randomNumber !== 1) {
		currentScore += randomNumber;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore
		
	}
	else {
		switchPlayer()
	}
})

//Hold Button Functionality
btnHold.addEventListener('click', () => {
	switchPlayer()
})