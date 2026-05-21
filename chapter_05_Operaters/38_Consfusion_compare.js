// == compares values after type conversion
// === compares values without type conversion (strict equality)

console.log(5 == '5');   // true  because '5' is converted to 5

// lose comparison will check (value or data type)if anyone is equel it will return true
console.log(5 === '5');  // false because types differ

console.log(null == undefined);  // true  they are loosely equal
console.log(null === undefined); // false strict equality fails

console.log(0 == false);   // true  because false converts to 0
console.log(0 === false);  // false different types

console.log('0' == false);  // true  because '0' converts to 0
console.log('0' === false); // false different types

console.log([1] == '1');   // true  array converted to string '1'
console.log([1] === '1');  // false different types

console.log(NaN == NaN);   // false NaN is not equal to itself
console.log(NaN === NaN);  // false strict equality also fails
