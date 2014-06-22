module.exports = largestPalindrome;

function largestPalindrome(){
    var largest = 0;
    function isPalindrome(num){
        var reverse = num.toString().split("", num.length).reverse().join("");
        return num == reverse;
    };
    for (var i = 999; i > 99; i--){
      for (var j = 999; j >= i; j--){
        var product = i * j;
        if (isPalindrome(product) && product > largest){
          largest = product;
        }
      }
    }
    return largest;
};

largestPalindrome();

// Answer: 906609
