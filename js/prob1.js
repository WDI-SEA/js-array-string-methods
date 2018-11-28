
// Question 1
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

console.log("Question 1")
console.log(friends.pop())

// Question 2
var friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
console.log("Question 2")
console.log(friends.sort())


// Question 3
friends2.split(",")
var friends2sort = friends2.split(",")

console.log("Question 3")
console.log(friends2sort.sort())

// Question 4
console.log("Question 4")
console.log(friends.reverse())

// Question 5
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

var ourFriends = myFriends.concat(yourFriends)
console.log("Question 5")
console.log(ourFriends.sort())


// Question 6
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

console.log("Question 6")
console.log(foods.indexOf("Pho"))

// Question 7
var donuts = foods.indexOf("Donuts")
var updatedFoods = foods.splice(donuts, 1)
console.log("Question 7")
console.log(foods)

// Question 8
var bot5 = foods.slice(4, 9)
console.log("Question 8")
console.log(bot5)

// Question 9
var word = "Space"
console.log("Question 9")
console.log(word.replace("a","i"))

// Question 10
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
console.log(ages.sort())
console.log(ages.sort(function (a, b) {  return a - b;  }))
//console.log(ages.median())
















