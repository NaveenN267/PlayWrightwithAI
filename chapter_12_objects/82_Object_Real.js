let obj = {}
obj.browser = "Chrome";
obj.name = "Test";
obj.TestID = 123;

console.log(obj);

delete obj.browser;

if (obj.browser === "Chrome") {
    console.log("Test Executed");
} else {
    console.log("Test Failed");
}
console.log(obj);

//========================
//Reference vs Premitive
// Pemitive
let c = 10;
let d = c; // here new value created
d = 100;
console.log(c); // here c will be 10
console.log(d); // here d will be 100

// this is call by reference
let a = { status: "Pass" };
console.log(a.status);

let b = a;//this means copy by reference
console.log(a.status); //a and b both are same
console.log(b.status);
b.status = "fail";
console.log(a.status); // after changing he b value, here a and b both are same
console.log(b.status);