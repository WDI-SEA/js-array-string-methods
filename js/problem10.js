var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var sortedNums = ages.sort((a,b) =>{
  return a-b;
})
if (sortedNums.length % 2 === 0){
  console.log((sortedNums[Math.floor(sortedNums.length/2)] + sortedNums[Math.floor(sortedNums.length/2)+1])/2);
} else {
  console.log(sortedNums[Math.floor(sortedNums.length/2)]);
}