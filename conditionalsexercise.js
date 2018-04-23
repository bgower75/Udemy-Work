var age = Number(prompt("What is your age?"));

if (age < 0) {
	console.log("Invalid age");
}

if(age === 21) {
	console.log("Happy 21st birthday!!");
	console.log("Your age is odd!");
}

//using modulo to determine if the age is an odd number (modulo returns a number if there is a remainder when dividing the age by 2, if there is a remainder then the age is odd)
if (age % 2 !== 0) {
	console.log("Your age is odd!!");
}

//using Math.sqrt to see if the age is a square root number (ie use 16 to get a true result)
if ((age % Math.sqrt(age) === 0) {
	console.log("perfect square");
}

