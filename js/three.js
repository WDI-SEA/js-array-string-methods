//There is a list of names in a string below. How could we sort them alphabetically?
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newFriends = friends.split(',').sort().join();
console.log(newFriends);

var newerFriends = friends.split(',').sort();
console.log(newerFriends);

