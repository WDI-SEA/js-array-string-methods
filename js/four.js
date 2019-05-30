var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';


//split funct
var newFriends = friends.split(',');

//sort funct
var sortedFriends = newFriends.sort().reverse();

console.log(sortedFriends);