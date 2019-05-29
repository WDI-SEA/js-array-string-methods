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

var indexDonuts = foods.indexOf('Donuts');
foods.splice(indexDonuts, 1);
console.log(foods);