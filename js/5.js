// 5.) We have two lists of friends below. 
//Combine the two arrays into one array, then sort them alphabetically.

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

  var allFriends = myFriends.concat(yourFriends);
  allFriends.sort();
  console.log(allFriends);

  //Alternative solution with add-in friends

 myFriends2 = myFriends.concat(yourFriends, ["Luke", "Han", "Leia"]);
  console.log(myFriends2);