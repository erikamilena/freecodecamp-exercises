/*
  Title: Make a Person
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/
/*
  Resume: Fill in the object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
*/


class Person {
    constructor (firstAndLast) {
        var firstName = firstAndLast.split(" ")[0];
        var lastName = firstAndLast.split(" ")[1];

        this.getFullName = function () {
            return firstName + " " + lastName;
        };
        this.getFirstName = function () {
            return firstAndLast.split(" ")[0];
        };
        this.getLastName = function () {
            return firstAndLast.split(" ")[1];
        };
        this.setFullName = function (full) {
            firstAndLast = full;
            firstName = firstAndLast.split(" ")[0];
            lastName = firstAndLast.split(" ")[1];
        };
        this.setFirstName = function (first) {
            firstName = first;
        };
        this.setLastName = function (last) {
            lastName = last;
        };
        return firstAndLast;
    }
}

//test
var bob = new Person('Bob Ross');
bob.getFullName();


