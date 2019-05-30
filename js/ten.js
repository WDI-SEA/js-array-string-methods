//find the median age

var ages = [94, 83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 37, 80, 64, 19, 6, 14];

console.log(ages.length);

ages.sort(function(a, b) {
    return a - b;
});

console.log(ages);
var x = ages.length;
var median = 0;


if (x % 2 === 1) {
    var index1 = Math.floor(ages.length/2);
    median = ages[index1];

} else {
    var c = ages[x / 2];
    var d = 1 + x/2;
    var e = ages[d];
    console.log(c);
    console.log(d);
    console.log(e);
    median = ((c + e) / 2);
}

console.log("Median is " + median);
