/*10.) BONUS - Here are a list of ages find the median age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
*/

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var agesSort = ages.sort(function compareNumbers(a, b){
  return a - b;
})

var agesSortDividedByTwo = Math.floor(agesSort.length/2)

//console.log(ages.length)
//console.log(agesSort)
//console.log(agesSortDividedByTwo)


if (agesSort.length%2 > 0) {
  console.log(agesSort[agesSortDividedByTwo])
}

else {
  console.log(((agesSort[agesSortDividedByTwo]) + (agesSort[agesSortDividedByTwo+1]))/2)
}