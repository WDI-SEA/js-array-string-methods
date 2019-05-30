


var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';


//split funct
var newFriends = friends.split(',');

//sort funct
var sortedFriends = newFriends.sort();
console.log(sortedFriends);

//join function
var joinedFriends = sortedFriends.join(',');
console.log(joinedFriends);

//OR a simpler one
console.log(friends.split(',').sort().reverse().join(','));