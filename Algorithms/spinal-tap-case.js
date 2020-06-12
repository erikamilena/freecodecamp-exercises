/*
  Title: Spinal Tap Case
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/
/*
  Resume: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])|[_|\s]+/g, "$1-$2")
        .toLowerCase();

}

//test
spinalCase('thisIsSpinalTap');
