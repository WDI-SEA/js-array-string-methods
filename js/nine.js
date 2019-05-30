//Change the word "Space" to the word "Spice"

var word = "Space";

var letters = word.split('');
var letterA = letters.indexOf('a');
letters.splice(letterA, 1, 'i');
console.log(letters.join(''));

