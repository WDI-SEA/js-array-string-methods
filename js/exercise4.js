var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var splitList = friends.split(",");

var sortedArray = splitList.sort();

var reverseArray = sortedArray.reverse();

var sortedList = sortedArray.join(",");

console.log("The friends list in reverse alphabetical order is:", sortedList+".");