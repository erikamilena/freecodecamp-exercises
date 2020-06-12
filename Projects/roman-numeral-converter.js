/*
  Title: Roman Numeral ConverterPassed
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/
/*
  Resume: Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
    var values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var letters = ['I', "IV", 'V', "IX", 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    var response = "";

    for (var index = values.length - 1; index >= 0; index--) {
        while (values[index] <= num) {
            response += letters[index];
            num -= values[index];
        }
    }
    console.log(response);
    return response;
}

//test
convertToRoman(2);

