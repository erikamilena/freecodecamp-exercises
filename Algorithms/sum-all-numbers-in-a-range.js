/*
  Title: Sum All Numbers in a Range
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/
/*
  Resume: We'll pass you an array of two numbers. Return the sum of those 
		two numbers plus the sum of all the numbers between them. 
		The lowest number will not always come first.
		
		Example: sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	arr.sort(function (a, b) { return a - b; });
	let newArr = [];
	let sumResult;
	for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
		newArr.push(i)
		sumResult = newArr.reduce((sum, num) => sum + num);
	}
	return sumResult;
}

//test
sumAll([10, 5]);
