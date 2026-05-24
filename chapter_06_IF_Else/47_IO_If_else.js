let username = "Naveen";
let passwored = "Naveen123";
let isuserlocked = true;
if ((username == "Naveen" && passwored === "Naveen123") && isuserlocked) {
    console.log("User logged")
} else {
    console.log("user not logged in")
}
let num = 8;
if (num % 2 === 0) {
    console.log("it even number")
} else {
    console.log("it's odd number")
}

for (let num = 1990; num <= 2026; num++) {
    // Correct leap year formula
    if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)) {
        console.log(num + " is a leap year");
    } else {
        console.log(num + " is NOT a leap year");
    }
}