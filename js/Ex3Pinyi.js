//(3) sort friends string
var friendsStr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'
var sortFriendsStr = friendsStr.split(',').sort().join(', ');
console.log(sortFriendsStr);