let fruits = ["Apple", "Banana", "Mango", "Kiwi", "Watermelon", "Cherry", "Orange"]
fruits.sort()
console.log(fruits);
let num = [1, 10, 20, 2, 4, 8, 9, 7, 6]
console.log(num.sort());
console.log(num.sort((a, b) => b - a));
console.log(num.sort((a, b) => a - b));

console.log(num.slice(0, 4));// it will print in the array index(2 to 6-1)
console.log(num.slice(3)); // it will pring the rest of the arry form index 3

console.log(num.slice(-4)); // it will print the from last index