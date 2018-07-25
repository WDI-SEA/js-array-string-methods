var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

function compareNumbers(a, b)
{
    return a - b;
}
var i = ages.length;
var num;
if (i%2==0)
  num= i/2;
  else
  num = (i-1)/2;
age = ages.sort(compareNumbers);
console.log(age);
console.log(age[num]);
