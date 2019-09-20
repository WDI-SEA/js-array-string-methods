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
//1-Last Name
var lastName = friends[friends.length-1]
console.log(lastName);

//2-Sort the list alphabetically
var sortAlphabetically = friends.sort();
console.log(sortAlphabetically);

//3-Sort the string
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friendsArray = friends.split(',').sort();
console.log(friendsArray);

//4 
var reverseFriends = friendsArray.reverse();
console.log(reverseFriends);

//5 Concat
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
console.log(ourFriends);

//6- Rank 

var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

var rankOfFood= foods.indexOf('Pho') +1;
console.log(rankOfFood);


//7- 
var indexOfDoughnut = foods.indexOf('Donuts');
foods.splice(indexOfDoughnut);

console.log(foods);

var sortAlph= foods.sort();
console.log(sortAlph);


//8-
var sliced = foods.slice(4 , 10);
console.log(sliced);

//9-
var word = "Space";

var newArray= word.split('')
newArray[2]= 'i';
word = newArray.join('');
console.log(word);

//10-

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var ascAges = ages.sort();
var median;
if(ages.length%2===0){
  var index1 = ages.length/2
  var index2 = index1-1
  median = (ascAges[index1]+ascAges[index2])/2;
}
else {
  median = ascAges[(ages.length/2)-0.5];
}

console.log(median);









