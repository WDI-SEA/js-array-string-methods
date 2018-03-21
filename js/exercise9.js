var word = "Space";

var wordThatIsSpice = word.split('');

console.log(wordThatIsSpice)
wordThatIsSpice.splice(wordThatIsSpice.indexOf("a"), 1, 'i');

console.log(wordThatIsSpice);

console.log(wordThatIsSpice.join(''));

