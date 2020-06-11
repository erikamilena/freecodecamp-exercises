/*
Title: Caesars Cipher 
*/
/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/
/*
Resume: A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
        Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/

function rot13(str) {
    let string = str.split("");
    let regex = /\W/;

    let alphabetA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    let alphabetB = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let result = "";

    for (let index = 0; index < string.length; index++) {
        if (alphabetA.indexOf(str[index]) !== -1) {
            result += alphabetB[alphabetA.indexOf(str[index])];
        } else if (alphabetB.indexOf(str[index]) !== -1) {
            result += alphabetA[alphabetB.indexOf(str[index])];
        } else if (regex.test(str[index])) {
            result += str[index];
        }
    }
    return result;
}

rot13("SERR CVMMN!");

