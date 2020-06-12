/*
  Title: Steamroller
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
*/
/*
  Resume: Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    return flattenDeep(arr);
}

function flattenDeep(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);

}

//test
steamrollArray([1, {}, [3, [[4]]]]);

