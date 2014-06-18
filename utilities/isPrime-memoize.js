var primeM = [];

function isPrime(num){
  var result = true;

  if (typeof primeM[num] !== "undefined"){
    return primeM[num];
  }

  if (num < 2) result = false;

  for (var i = 2; i < num; i++){
    if (num % i == 0) result = false;
  }

  primeM[num] = result;
  return result;
}
