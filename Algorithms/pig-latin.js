/*
  Title: Pig Latin
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
*/
/*
  Resume: Pig Latin is a way of altering English Words. The rules are as follows:
          - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
          - If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
    let reVowal = /[aeiou]/;
    let vowal = "way";
    let consonant = "ay"

    if (str.substring(0, 1).match(reVowal)) {
        return str.concat(vowal);
    } else if (str.substring(0, str.length).match(reVowal) === null) {
        return str.concat(consonant);
    } else if (str.substring(1, 2).match(reVowal)) {
        return str.substring(1, str.length).concat(str.slice(0, 1).concat(consonant));
    } else if (str.substring(str.length / 2, str.length).match(reVowal)) {
        return str.substring(str.length / 2, str.length).concat(str.slice(0, str.length / 2).concat(consonant));
    }
}
translatePigLatin("glove");

