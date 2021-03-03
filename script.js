'use strict'
//Selecting Elements
const score1 = document.querySelector('#score--0')
const score2 = document.querySelector('#score--1')
const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const current1 = document.querySelector('#current--0')
const current2 = document.querySelector('#current--1')
const player = document.querySelector('.player')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

//Starting Conditions
score1.textContent = 0
score2.textContent = 0
dice.classList.add('hidden1')

//Global Variables
const totalScore = [0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true

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

//Function For New Game
function newGame() {
	currentScore = 0;
	score1.textContent = currentScore
	score2.textContent = currentScore
	current1.textContent = currentScore
	current2.textContent = currentScore

	document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
	document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
	document.getElementById(`name--${activePlayer}`).classList.remove('name--winner')
	totalScore[0] = 0;
	totalScore[1] = 0;
	playing = true
}

//Rolling Button Funtionality
btnRoll.addEventListener('click', () => {
	if (playing) {
		dice.classList.remove('hidden1')
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
	}
})

//Hold Button Functionality
btnHold.addEventListener('click', () => {
	if (playing) {
		//Add Current Score to TotalScores
		totalScore[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]

		//Check if the totalScore is higher >=100
		if (totalScore[activePlayer] >= 50) {
			//Finish The Game
			playing = false
			dice.classList.add('hidden1')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
			document.getElementById(`name--${activePlayer}`).classList.add('name--winner')
		}
		else {
			switchPlayer()
		}
	}
})

//Resetting All Scores to 0(New Game Button Functionality)
btnNew.addEventListener('click', () => newGame())