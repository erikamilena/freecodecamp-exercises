/*
  Title: Telephone Number Validator
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/
/*
  Resume: Return true if the passed string looks like a valid US phone number.
          valid formats for US numbers:
          555-555-5555
          (555)555-5555
          (555) 555-5555
          555 555 5555
          5555555555
          1 555 555 5555
*/

function telephoneCheck(str) {
    let regex = new RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/, 'i');
    return regex.test(str);
}

//test
telephoneCheck("1 555-555-5555");
