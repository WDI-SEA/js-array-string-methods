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

  var finalFriends = myFriends.concat(yourFriends);

  var sortedFriends = finalFriends.sort();

  console.log(sortedFriends);

  // you can do this, adding single elements at the end! using ooncat funct
  myFriends.concat(yourFriends, ['Luke', 'Han']);

  