/*
Title: Drop it
*/
/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
*/
/*
Resume: remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it
*/

function dropElements(arr, func) {
    let item;
    return arr.filter(num => { if (func(num)) item = true; return item; }); 
}

// test here
dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
});

//result [3,9,2]