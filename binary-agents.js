/*
Title: Binary Agents
*/
/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
*/
/*
Resume: Return an English translated sentence of the passed binary string. - The binary string will be space separated.
*/

function binaryAgent(str) {
    let arr = str.split(" ");
    let result = [];
    let decimalNumber;
    let letter;

    for (let binary = 0; binary < arr.length; binary++) {
        decimalNumber = binaryToDecimal(arr[binary], 2);
        letter = String.fromCharCode(decimalNumber);
        result.push(letter);
    }
    return result.join("");
}

function binaryToDecimal(x, base) {
    const parsed = Number.parseInt(x, base);
    if (Number.isNaN(parsed)) {
        return 0;
    }
    return parsed;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
