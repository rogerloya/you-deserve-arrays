const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

thirdElement = array[2];
secondChar = thirdElement[1];

const type = isNaN(thirdElement);

if (type === false) {
	console.log("Error Not A String");
}

console.log("The third Item from is: " + secondChar);