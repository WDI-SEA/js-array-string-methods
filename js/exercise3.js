var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var splitList = friends.split(",");

var sortedArray = splitList.sort();

var sortedList = sortedArray.join(",");

console.log("The list of friends in aphabetical order is:", sortedList+".");