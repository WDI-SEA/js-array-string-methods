var word = "Space";

//split funct

var wordSplit = word.split('');
console.log(wordSplit);

var rank = wordSplit.indexOf('a');
wordSplit.splice(rank, 1, 'i');

console.log(wordSplit);

//replace funct returns a copy. word.replace can leave word alone
