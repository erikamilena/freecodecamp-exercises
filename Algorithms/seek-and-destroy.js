/*
  Title: Seek and Destroy
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
*/
/*
  Resume: You will be provided with an initial array (the first argument in the destroyer function), 
          followed by one or more arguments. Remove all elements from the initial array that are of 
          the same value as these arguments.
*/

function destroyer(arr, ...arg) {
    let argArr = [...arg];
    return arr.filter(num => (argArr.indexOf(num) === -1));
}

//test
destroyer(["tree", "hamburger", 53], "tree", 53);
