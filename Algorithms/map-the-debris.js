/*
  Title: Map the Debris
*/
/* 
  Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/
/*
  Resume: Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). 
          The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
          You can read about orbital periods on Wikipedia.
          The values should be rounded to the nearest whole number. The body being orbited is Earth.
          The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  return arr.map(val => ({name: val.name,  orbitalPeriod: averageAltitude(val.avgAlt)}));
  
}

//calculate altitude
function averageAltitude(avgAlt) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let period = 2 * Math.PI * (Math.sqrt(Math.pow((earthRadius + avgAlt), 3) / GM))

  return Math.round(period);
}

//test
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);