//create secret number
var number = 12;

//ask user for a guess
var guess = Number(prompt("Guess a number"));

//check guess
if(guess === number) {
	alert("Congratulations you guessed correctly!!!");
}

else if(guess > number) {
	alert("You're too high!!");
}
else {
	alert("You're too low!!!");
}