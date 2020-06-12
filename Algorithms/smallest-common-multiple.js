/*
  Title: Smallest Common Multiple
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
*/
/*
  Resume: Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
          as well as by all sequential numbers in the range between these parameters.
*/

function smallestCommons(arr) {
    arr.sort(function (a, b) { return a - b });
    let currentLmc = arr[0];

    for (let num = arr[0] + 1; num <= arr[arr.length - 1]; num++) {
        currentLmc = lcm(currentLmc, num);
    }
    return currentLmc;
}

//Calculate greatest common divisor / Algorithm euclid 
function gcd_euclid(a, b) {
    if (b == 0) {
        return a;
    }
    let aPrime = a % b;
    return gcd_euclid(b, aPrime);
}

//calculate least common multiple
function lcm(num1, num2) {
    return num1 * num2 / gcd_euclid(num1, num2);
}

//test
smallestCommons([1, 5]);
