//How can I find the index of Donuts and remove it? (Hint: look up splice)

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

  var x = foods.indexOf('Donuts');
  var y = foods.splice(x, 1);
  console.log(y);
  console.log(foods);
  
