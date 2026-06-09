let a = { status: "Pass" };
let b = { status: "Pass" };

console.log(a.status);
console.log(b.status);
//here the values look like same but both are stored in differet location"heap memory"

if (a === b) { // 'a' never equal to 'b'
    console.log("True");
} else {
    console.log("False");
}