var word = "Space";
var wordArray = word.split('');
wordArray.splice(wordArray.indexOf("a"),1 , "i");

console.log(wordArray.join(''));