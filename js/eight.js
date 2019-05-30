// 8.) My friends want to know what my 5th to 10th favorite foods are. How would I find these foods?

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

  var index = foods.indexOf('Donuts');
  foods.splice(index,1);

  console.log(foods.splice(4,6))
