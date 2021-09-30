const prompt = require("prompt-sync")({ sigint: true });

const array = JSON.parse(prompt("Enter an array: "));

const isLongList = array.length >= 10;

console.log('list is long: ', isLongList);