let x = 10;
if (x > 12) {
    console.log(x, "is  same");
} else {
    console.log(x, "is not same")
}

let isUserlogged;
let userrole = "Admin";

if (isUserlogged = true) {
    if (userrole === "Admin") {
        console.log("Welcome to admin.")
    } else if (userrole === "editor") {
        console.log("welcome to editor")
    } else if (userrole === "user") {
        console.log("welcome to user.")
    } else {
        console.log("welcome to guest")
    }
} else {
    console.log("you are not loogged in")
}