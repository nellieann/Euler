/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/
module.exports = pythagoreanTriplet;

function pythagoreanTriplet(){
  for (var c = 1; c < 1000; c+=1){
    for (var b = 1; b < c; b+=1){
      for (var a = 1; a < b; a+=1){
        if((a*a) + (b*b) === (c*c) && a+b+c === 1000){
          return a*b*c;
        }
      }
    }
  }
}

console.log(pythagoreanTriplet());

// Answer: 31875000
