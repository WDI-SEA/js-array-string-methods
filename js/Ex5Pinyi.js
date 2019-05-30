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

  var combinedSortFriends = myFriends.concat(yourFriends).sort();
  console.log(combinedSortFriends);

  //!if you add two array together it will become string
  var friends = yourFriends + myFriends
  console.log(typeof friends); // string