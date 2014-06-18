/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/
module.exports = sumOfPrimes;

function isPrime(num){
  if (num < 2) return false;
  if (num === 2) return true;
  for (var i = 2; i < Math.sqrt(num); i++){
    if (num % i == 0) return false;
  }
  return true;
}

function sumOfPrimes(){
  var sum = 0;
  for (var i = 2; i < 2000000; i++){
    if (isPrime(i)){ sum += i; }
   }
  return sum;
}

console.log(sumOfPrimes());
