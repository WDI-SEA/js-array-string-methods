// List all the friends in reverse alphabetical order:
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newFriends = friends.split(',').sort().reverse();

console.log(newFriends);
