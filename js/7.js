// 7.) I made a mistake with my favorite foods. 
// How can I find the index of Donuts and remove it? (Hint: look up splice)

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

  var donut = foods.indexOf('Donuts');
  foods.splice(donut,1);
  console.log(foods);