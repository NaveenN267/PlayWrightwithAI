function greatTester(name, callback) {
    console.log("Wellcome " + name);
    callback;
}
greatTester("Test");


// call back with parameters

function runTest(testname, testid) {
    let status = "Pass";
    testid(testname, status);
}

runTest("Naveen Test case", function (name, result) {
    console.log(name + " => " + result);
})

//sync call back- for each

let bugs = ["Testfail", "TestPass", "TestSkipp"];
bugs.forEach(function (test, i) {
    console.log("Bug is " + (i + 1) + " " + test);
})

console.log("Total bugs lenght " + bugs.length);