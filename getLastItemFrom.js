const prompt = require("prompt-sync")({ sigint: true });

const array = JSON.parse(prompt("Enter an array: "));

const lastName = array[array.length - 1];

console.log('The last name is: ', lastName);
