// 1.) Find the last name in the following array:

var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

console.log("The last name in the friends array is " + friends[11]); // It prints -> The last name in the friends array is Harriet


// 2.) Sort the list of friends above in alphabetical order.

console.log("The friends list is sorted now in an alphabetic order " + friends.sort()); // It prints -> The friends list is sorted now in an alphabetic order Curly,Darcy,Elinor,Elizabeth,Emma,Grey,Harriet,Jane,Larry,Lydia,Mary,Moe

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

console.log(friends.split(",").sort().join()); // The friends string got splitted where comma is found and then it gets sorted and then we join the splitted strings , hence it prints the printed result is -> Curly,Darcy,Elinor,Elizabeth,Emma,Grey,Harriet,Jane,Larry,Lydia,Mary,Moe


// 4.) List all the friends above in reverse alphabetical order.

console.log(friends.split(",").reverse().join()); //Here we split the friends string and then sort it in reverse order and then join it , the printed result is -> Harriet,Lydia,Grey,Darcy,Mary,Elinor,Elizabeth,Emma,Jane,Curly,Larry,Moe

// 5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.

var myFriends = [
    'Rickon',
    'Meera',
    'Hodor',
    'Jojen',
    'Osha',
    'Rickard',
    'Maester',
    'Rodrik',
    'Jory',
    'Septa',
    'Jon'
  ];
  
  var yourFriends = [
    'Bilbo',
    'Boromir',
    'Elrond',
    'Faramir',
    'Frodo',
    'Gandalf',
    'Legolas',
    'Pippin'
  ];

  //The answer is :-
const combinedArrays = myFriends.concat(yourFriends);

console.log(combinedArrays);

// Question 6 ,7,8 &10 will need somemore time to figure it out and shall commit it later 


// 9.) Change the word "Space" to the word "Spice".

var word = "Space";

word = "Spice";

console.log(word);
