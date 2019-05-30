// 9.) Change the word "Space" to the word "Spice".

var space = 'space';
var spaceArr = space.split('');
console.log(spaceArr)
var spaceIndexA = spaceArr.indexOf('a');
console.log(spaceIndexA)
spaceArr.splice(spaceIndexA,1,'i');
console.log(spaceArr)
var spice = spaceArr.join('')

console.log(spice);


