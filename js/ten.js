var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

ages.sort(function(a, b){
    return a-b
});
var half = Math.floor(ages.length/2);
if(ages.length % 2){
    console.log(ages[half]);
}else {
    console.log((ages[half-1] + ages[half]) / 2.0);
}

// var median = function(array) {
//     array = array.sort();
//     if (array.length % 2 === 0) { // array with even number elements
//       return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
//     }
//     else {
//       return array[(array.length - 1) / 2]; // array with odd number elements
//     }
//   };