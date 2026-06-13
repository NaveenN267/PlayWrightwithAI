//call back is fuction which will call the end of the function

function print() {
    console.log("It's a call back function")
}

function real(realfunc, callback) {
    console.log("Completed the real fucnion" + realfunc);
    callback();
}

//we can call callback function in 3ways
//1 st one is
real(" completed", print);

// 2nd way to call the call back function
console.log();
real(" 2nd way", function () {
    console.log("Completed the sencond way of creation");
})
console.log();
//3rd way of creating a function

real(" 3rd way", () => {
    console.log("complete the thirdway of creation")
})