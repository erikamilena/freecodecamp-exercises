/*
  Title: Convert HTML Entities
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
*/
/*
  Resume: Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let arr = [...str];

    return arr.map(character => (character.match("/[a-z]/i")) ? character : entityHtml(character)).join("");
}

function entityHtml(characters) {
    switch (characters) {
        case "&":
            characters = "&amp;";
            break;
        case "<":
            characters = "&lt;";
            break;
        case ">":
            characters = "&gt;";
            break;
        case "'":
            characters = "&apos;";
            break;
        case '"':
            characters = "&quot;";
            break;
    }
    return characters;
}

// test
convertHTML("Schindler's List");
