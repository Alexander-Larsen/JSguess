//Genereal game variables
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";

//random letter generation
function jsGuess() {

	ranLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log(ranLetter);

}

//player input
document.onkeyup = function (event) {
	var playerGuess = event.key;


	//if correct random letter is guessed	
	if (playerGuess === ranLetter) {
		won++;
		attempts = 10;
		usedArray = [];
		alert("Congratulations! You're psychic!")
	}

	//invalid random letter is guessed
	jsGuess();
	if (playerGuess !== ranLetter) {
		attempts--;
	}

	//when attempts reach 0 game attempts is reset to 0 and random letter array is cleared


	if (attempts == 0) {
		lost++;
		usedArray = []
		attempts = 10;
		alert("You're not a psychic get out of my sight!")

	}

	//prevents user from guessing letter again
	if (usedArray.indexOf(playerGuess) >= 0) {
		alert("You guessed that already and it's going to count as one your guesses!")

	} else {
		usedArray.push(playerGuess);
		document.getElementById('playerGuess').innerHTML = usedArray;
		console.log(usedArray);

	}

	document.getElementById('won').innerHTML = won;
	document.getElementById('lost').innerHTML = lost;
	document.getElementById('attempts').innerHTML = attempts;

}

