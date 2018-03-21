// 10.) BONUS - Here are a list of ages. Find the median age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

sortedAges = ages.sort((a,b) => {
   return a>b;
});

var combinedMedian;

//if even number of elements, find the two middle elements, then average their values
console.log(`Length: ${sortedAges.length}`);

if (sortedAges.length % 2 === 0) {
   var upperMiddleElement = sortedAges.length / 2;
   var lowerMiddleElement = sortedAges.length / 2 - 1;
   combinedMedian = sortedAges[lowerMiddleElement] + sortedAges[upperMiddleElement] / 2;
} else {
   combinedMedian = sortedAges[Math.floor(sortedAges.length / 2)];
};

console.log(`Median: ${combinedMedian}`);
console.log(`Sorted array, for reference: ${sortedAges}`);