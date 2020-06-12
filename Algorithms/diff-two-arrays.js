/*
Title: Diff Two Arrays
*/
/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/
/*
Resume: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
        In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1.filter(num => arr2.indexOf(num) == -1).concat(arr2.filter(num => arr1.indexOf(num) == -1));

}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
