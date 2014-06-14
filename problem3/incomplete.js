/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

module.exports = primeFactor;

function isPrime(num) {
 if (num < 2) return false;
 for (var i = 2; i < num; i++) {
  if (num%i==0)
   return false;
  }
 return true;
}

function largestPrimeFactor(num){
 var primes = [];
 for (var i = 2; i <= Math.sqrt(num); i++){
  if (num % i === 0 && isPrime(i)){
   primes.push(i)
  }
 }
 return primes.pop();
}
console.log(largestPrimeFactor(600851475143));
