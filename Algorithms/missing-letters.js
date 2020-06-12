/*
  Title: Missing letters
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/
/*
  Resume: Find the missing letter in the passed letter range and return it. - If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let string = "abcdefghijklmnopqrstuvwxyz";
    let res;
    let start = string.indexOf(str[0]);

    for (const item in str) {
        if (str[item].charCodeAt() !== string[start].charCodeAt()) {
            res = string[start];
            return res;
        }
        start++;
    }
}

//test
fearNotLetter("stvwx");
