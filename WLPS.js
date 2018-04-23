// all numbers between -10 and 19
var num = -10;

console.log("Print all numbers between -10 and 19");
while (num <= 19) {
	console.log(num);
	num++;
}

// all even numbers between 10 and 40
var num = 10;

console.log("Print all even numbers between 10 and 40");
console.log("only counting up by 2 so can print odds if starting number is odd")
// this version will just count up by 2 so could print odd numbers if starting numb is odd
while(num <= 40) {
	console.log(num);
	num+=2;
}

// this version will only every print out an even number no matter what the starting number is because it is checking if the number is divisible by 2
var num = 10;
console.log("only prints even due to it checking num is divisible by 2")
while(num <= 40) {
	if(num%2 ==0)
	console.log(num);
	num++;
}

// all odd numbers between 300 and 333
var num = 300;

console.log("Print all odd numbers between 300 and 333");
while(num <= 333) {
  if(num % 2 != 0) {
	console.log(num);
  }
  num++;
}

// all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

while(num <=50) {
	if(num%5 == 0 && num%3 == 0) {
		console.log(num);
	}
	num++;
}