var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newFriends = friends.split(',').sort().join(',');

console.log(newFriends);