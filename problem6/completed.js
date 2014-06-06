/*

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the
first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of
the first one hundred natural numbers and the square of the sum.

*/

module.exports = differenceBetween;

function differenceBetween(){
  var sumOfSquares = 0;
  var sumOfNumbers = 0;
  for (var i = 1; i <= 100; i++){
    sumOfSquares += i*i;
    sumOfNumbers += i;
  }
  return Math.pow(sumOfNumbers, 2) - sumOfSquares;
}
console.log(differenceBetween());
