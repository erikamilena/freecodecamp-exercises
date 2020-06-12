/*
  Title: Sum All Odd Fibonacci Numbers
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
*/
/*
  Resume: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
    let previousNum = 0;
    let currentNum = 1;
    let sum = 0;
    let result = 1;

    while (result <= num) {
        sum = previousNum + currentNum;
        if (sum > num) {
            break;
        }
        previousNum = currentNum;
        currentNum = sum;
        if (currentNum % 2 !== 0) {
            result += currentNum;
        }
    }
    return result;
}

//test
sumFibs(75024);
