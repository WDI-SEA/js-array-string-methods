// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

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

var fifthFav = 5-1;
var tenthFav = 10-1; 
console.log(foods.slice(fifthFav,tenthFav));
