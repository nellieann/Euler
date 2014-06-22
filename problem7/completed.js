/*

By listing the first six prime numbers:
2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?

*/
module.exports = thisPrime;

function isPrime(num){
  if (num < 2) return false;
  if (num === 2) return true;
  for (var i = 2; i <= Math.sqrt(num); i++){
    if (num%i==0) return false;
  }
  return true;
}

function thisPrime(index){
  this.index = index;
  var primes = [];
  var max = 200000;

  for (var j = 1; j <= max; j++){
    isPrime(j) && primes.push(j);
  }

  return primes[index];
}

console.log(thisPrime(10000));

// Answer: 104743
