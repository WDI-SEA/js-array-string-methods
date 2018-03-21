const  word = 'space';

const wordSplit = word.split('')
const indexA = wordSplit.indexOf('a')
const splice = wordSplit.splice(indexA, 1, 'i')

console.log('wordSplit', wordSplit)
console.log('index of A', indexA)