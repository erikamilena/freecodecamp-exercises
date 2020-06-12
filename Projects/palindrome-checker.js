/*
  Title: Palindrome Checker
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/
/*
  Resume: Return true if the given string is a palindrome. Otherwise, return false.
          A palindrome is a word or sentence that's spelled the same way both forward 
          and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
    var arr = str.split(" ").join("").toLowerCase().replace(/[\W_]/g, "").split("");
    var j = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[j]) {
            j--;
        } else {
            return false;
        }
    }
    return true;
}

//test
palindrome("_eye");

