var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
console.log("Before: ");
console.log(friends);
var fr = friends.split(",");
fr = fr.sort();
friends = fr.toString();
console.log("After: ");
console.log(friends);