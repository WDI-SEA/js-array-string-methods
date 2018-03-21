// 4.) List all the friends above in reverse alphabetical order.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

let friendsArr = friends.split(',');
friendsArr.sort();
console.log(friendsArr.reverse());