const prompt = require("prompt-sync")({ sigint: true });

const array = JSON.parse(prompt("Enter an array: "));

const firstName = array[0];

console.log('The first name is: ', firstName);
