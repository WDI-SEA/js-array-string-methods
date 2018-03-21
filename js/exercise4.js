var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friendsArray = friends.split(",");
friendsArray.sort(function(a, b) {
	return a > b
;}
)

friendsArray.reverse();
	
console.log(friendsArray);