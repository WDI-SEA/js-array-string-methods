// 9.) Change the word "Space" to the word "Spice".

var word = "Space";

let spaceArr = word.split('');
spaceArr.splice(spaceArr.indexOf('a'),1,'i');
let spaceArrStr = spaceArr.join('');
console.log(spaceArrStr);