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

//combine the two
var allFriends = myFriends.concat(yourFriends);
var allFriendsAlph = allFriends.sort();
console.log(allFriends);

console.log(allFriendsAlph);

