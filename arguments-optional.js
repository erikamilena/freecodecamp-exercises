// Arguments Optional

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether(...args) {
  let arr = [...args];

  if(typeof arr[0] !== "string" && typeof arr[1] !== "string" ) {
    if(typeof arr[0] == "number" && arr.length == 2) {
      return arr[0] + arr[1];
    } else {
      return function(arg2) {
        if(typeof arg2 == "number") {
          return arr[0] + arg2; 
        }
      }
    }  
  }
  return undefined;
}

addTogether(2)([4]);
