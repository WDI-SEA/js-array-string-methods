//?9.) Change the word "Space" to the word "Spice".
var word = "Space";

//find index of 'i'
var charChange = 'i';
var indexChange = word.indexOf('a');

//change 'a' to 'i'
var newWord = word.split('');
newWord[indexChange] = charChange;
newWord = newWord.join('');
console.log(newWord);