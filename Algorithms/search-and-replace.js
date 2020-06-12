/*
  Title: Search and Replace
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
*/
/*
  Resume: Perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/

function myReplace(str, before, after) {
    return (before.charAt(0).match("^[A-Z]")) ? 
        str.replace(before, after.charAt(0).toUpperCase() + after.slice(1)) :
         str.replace(before, after);
}

//test
myReplace("Let us go to the store", "store", "mall")
