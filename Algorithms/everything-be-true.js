/*
  Title: Everything Be True
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
*/
/*
  Resume: Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
          In other words, you are given an array collection of objects. The predicate pre will be an object 
          property and you need to return true if its value is truthy. Otherwise, return false.
          In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
*/


function truthCheck(collection, pre) {
    return truthy(collection, pre);
}

function truthy(collection, value) {
    for (let item in collection) {
        if (collection[item].hasOwnProperty(value) && collection[item][value]) {} 
        else {
            return false;
        }
    }
    return true;
}

// test here
truthCheck(
    [
        { "user": "Tinky-Winky", "sex": "male", "age": 0 },
        { "user": "Dipsy", "sex": "male", "age": 3 },
        { "user": "Laa-Laa", "sex": "female", "age": 5 },
        { "user": "Po", "sex": "female", "age": 4 }
    ], 
    "age");

// test here
truthCheck(
    [
        { "user": "Tinky-Winky", "sex": "male" },
        { "user": "Dipsy", "sex": "male" },
        { "user": "Laa-Laa", "sex": "female" },
        { "user": "Po", "sex": "female" }
    ], 
    "sex");