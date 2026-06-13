console.log("1st test log"); //Synchronous (sync) means tasks run one after another.

setTimeout(function () { //Asynchronous (async) means tasks can start and continue later without blocking the rest.
    console.log("2nd test log")
}, 500);

console.log("3rd test log")//Synchronous (sync) means tasks run one after another.


//=======================================

let testresult = ["Pass", "Fail", "Skip", "NotAtended"];

testresult.forEach(function (results, index) {
    console.log("Test : " + index + " => " + results);
});// this is Synchronous (sync) means tasks run one after another.