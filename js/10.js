// 10.) BONUS - Here are a list of ages
// find the median age. The median is the number that is halfway into the sorted set.
//To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
var ages = [/*83,*/ 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var agesSorted = ages.sort(function(a, b){return a-b});

var agesCheck = agesSorted.length % 2;

var calc = function() {
    if (agesCheck = 0) {
        console.log(agesSorted.indexOf(agesSorted.length / 2) + agesSorted.indexOf((agesSorted.length / 2) + 1));
    } 
}
console.log(agesSorted);
console.log(agesCheck);