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

// it's normal functions
function statuscode(status) {
    if (status >= 200 && status <= 300) {
        console.log("It's working fine")
    }
} statuscode("250")

// This is function as expression

const statuscode1 = function (statuscode1) {
    if (statuscode1 >= 200 && statuscode1 <= 300) {
        console.log("this is function as expression")
    }
}
statuscode1("222")
// This is arrow function

const statuscode2 = (statuscode2) => {
    if (statuscode2 >= 200 && statuscode2 <= 300) {
        console.log("this is arrow function ")
    }
}
statuscode2("224");