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

var i = 0;
function myFunction(tempArray) {
   for ( i = 0; i < foods.length; i++)
   {
      if(foods[i] === 'Donuts')
      {
        console.log(i);
        return i;
      }

  }   
  return -1;        // The function returns the product of p1 and p2
}

myFunction(foods);

foods.splice(i, 1);

console.log(foods);

