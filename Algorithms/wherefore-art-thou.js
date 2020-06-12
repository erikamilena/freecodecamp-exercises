/*
  Title: Wherefore art thouPassed
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
*/
/*
  Resume: Make a function that looks through an array of objects (first argument) and returns an array of all objects 
            that have matching name and value pairs (second argument)
        
            Example: 
            if the first argument is 
            [
                { first: "Romeo", last: "Montague" }, 
                { first: "Mercutio", last: null }, 
                { first: "Tybalt", last: "Capulet" }
            ], 
            and the second argument is { last: "Capulet" }
            then you must return the third object from the array (the first argument), 
            because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {
    return collection
        .filter(elem => Object.keys(source)
            .every(key => elem.hasOwnProperty(key) && elem[key] === source[key])
        );

}

//test
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
