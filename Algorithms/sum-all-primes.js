/*
  Title: Sum All Primes
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
*/
/*
  Resume: Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    let currentNum = 0;
    let result = 0;

    while (currentNum <= num) {
        if (primesNumber(currentNum) == true) {
            result += currentNum;
        }
        currentNum++;
    }
    return result;
}

// Identify primes number
function primesNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let item = 2; item * item <= number; item++) {
        if (number % item == 0) {
            return false;
        }
    }
    return true;
}

//test
sumPrimes(10);
