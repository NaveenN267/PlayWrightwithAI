//Access And modifiy

let status = ["Pass", "fail", "Null", "Skip"];

console.log(status[2]);
console.log(status[0]);

console.log(status.at(-1))
console.log(status.at(-2))

status[2] = "not attended";
console.log(status);

let num = [1, 2, 3, 4, 5]
num.push(4); // to add the value at end
console.log(num);

//to Remove the value at end
num.pop();
console.log(num);

// to add the value at begining
num.unshift(6)
console.log(num)

//to remove the value at begining
num.shift()
console.log(num)

//adding two or more element to the array
let arry = [1, 2, 3, 4];
arry.push(5, 6, 7, 8);
console.log(arry);
