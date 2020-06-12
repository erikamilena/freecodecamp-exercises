/*
Title: DNA Pairing
*/
/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
*/
/*
Resume: Base pairs are a pair of AT and CG. Match the missing element to the provided character.
*/

function pairElement(str) {
    let arr = [];

    for (let c in str) {
        arr.push(consonant(str[c]).split(""));
    }
    return arr;
}

function consonant(letter) {
    switch (letter) {
        case "A":
            letter += "T";
            break;
        case "C":
            letter += "G";
            break;
        case "G":
            letter += "C";
            break;
        case "T":
            letter += "A";
            break;
    }
    return letter
}

pairElement("TTGAG");
