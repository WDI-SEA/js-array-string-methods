//(10) find the median age
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
ages.sort(function(a,b) {return a - b});
// console.log(ages);
// console.log(ages.length);

var medianAge;

if (ages.length % 2 === 0 ) {
    medianAge = (ages[ages.length/2]+ages[ages.length/2 +1])/2;
} else {
    medianAge = ages[Math.ceil(ages.length/2)];
}

console.log("The median age is " + medianAge + " .");