//4.) List all the friends above in reverse alphabetical order.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newFriends = friends.split(",");
//console.log(newFriends);

newFriends.sort();

newFriends.reverse();

//console.log(newFriends.join());

//Alternative solution

friends.split().sort().reverse().join();

console.log(friends);