function name(name) {
    console.log("Hi " + name);
    return name;
}
name("Naveen");

// if we want to make normal function to arrow function need to remove the funtion keyword
// remove the return keywork, remove the curly brace and use this operator =>

const func = (name) => name;
let resu = func("Naveen")
console.log(resu);

const dob = n => n * 2;
console.log(dob(10))
