//7.) I made a mistake with my favorite foods. How can I find the index of Donuts and remove it? (Hint: look up splice)

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
  
  var pos = foods.indexOf('Donuts');
  console.log(pos);

  var removedItem = foods.splice(13, 1);
  console.log(foods);
