var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
console.log("before");
console.log(friends);
var fr = friends.split(",");
fr = fr.sort();
fr = fr.reverse();
friends = fr.toString();
console.log("after");
console.log(friends);