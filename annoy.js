var answer = prompt("are we there yet?");
// this version would work, but .includes only returns a boolean
while(!answer.includes ("yes") && !answer.includes("yeah")) {
	var answer = prompt("are we there yet?");
}

alert ("Yay, we finally made it!");

var answer = prompt("are we there yet?");
while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("are we there yet?");
}

alert("Yay, we finally made it!!");


//git init