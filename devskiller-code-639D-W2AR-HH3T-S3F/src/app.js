// --- Step 1 ---------------------------------------------------------
// Apply the map() function so that it returns every element of the array `myArray` multiplied by 2.
// Example invocation:
// var numbers = [1,2,3,4];
// var result = step1(numbers);
export function step1(numbers) {
  return numbers.map(number => number * 2);
}


// --- Step 2---------------------------------------------------------
// Apply the map() function to the variable `str` so that every other word in the string is uppercase.
// Example invocation:
// var str = 'hello world how ya doing?';
// var result = step2(str);
export function step2(str) {
  return str.split('').map((word, i) => i % 2 == 0 ? word.toLowerCase() : word.toUpperCase()).join('');
}


// ---Step 3----------------------------------------------------------------
// Remove all negative numbers from the array using filter function

// Example invocation:
// var numbers = [-2,-1,0,1,2];
// var result = step3(numbers)
export function step3(numbers) {
  return  numbers.filter(number => number >= 0);
}


// --- Step 4 ----------------------------------------------------------------
// Find the largest number in the array using reduce function
// Example invocation:
// var numbers = [1,2,3,4];
// var result = step4(numbers)
export function step4(numbers) {
  return numbers.reduce((acc, number) => number > acc ? number : acc, 0);
}
