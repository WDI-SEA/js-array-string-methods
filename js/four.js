var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var newArray = friends.split(',').sort().reverse().join(',');
console.log(newArray);