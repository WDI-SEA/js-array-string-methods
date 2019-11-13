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

  var ourFriends = myFriends.concat(yourFriends);

  var sortedFriends = ourFriends.sort();

  console.log("The combined and alphabetically sorted array is:", sortedFriends+".");