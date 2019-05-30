/* 3.) There is a list of names in a string below. 
How could we sort them alphabetically? 
Hint: use string and array methods. */

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newFriends = friends.split(",");
//console.log(newFriends);

newFriends.sort();

console.log(newFriends.join());