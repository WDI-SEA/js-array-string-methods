var friendsStr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'
var revSortFriendsStr = friendsStr.split(',').sort().reverse().join(', ');
console.log(revSortFriendsStr);