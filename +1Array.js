/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.
*/

function upArray(arr){
 let equal='';
  arr.map((number) => {
    number >= 0 ? 
      equal += number : 
    equal = 'null';
  });
  if (equal !== 'null'){
    equal = parseInt(equal, 10) + 1;
    return equal.toString().split('').map(Number);
  } else {
    return null;
  }
}

//TESTS
upArray([2,3,9]);
upArray([4,3,2,5]);
upArray([1,-9]);

