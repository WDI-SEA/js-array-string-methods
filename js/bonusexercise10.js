var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var sortedAges = ages.sort(function(a,b) {
  return a - b;
});

 if (ages.length%2 === 1) {
    console.log("The median is", ages[Math.floor(ages.length/2)]+".");
 } else {
    let first = ages[ages.length/2];
    let second = ages[ages.length/2-1];
    let mean = (first+second)/2;
    console.log("The median is", mean+".");
 }