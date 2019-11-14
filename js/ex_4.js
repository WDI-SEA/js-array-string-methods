var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

//4.) List all the friends above in reverse alphabetical order.

let friendsAlpha = friends.split(",").sort();

let friendsReverseAlpha = friendsAlpha.reverse();

console.log(friendsReverseAlpha);
