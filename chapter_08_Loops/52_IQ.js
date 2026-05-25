let x = 11;
let y = 10;
let z = 12;
if (x + y > z && y + z > x && x + z > y) {
    if (x === y || y === z || z === x) {
        console.log("all sides are equels")
    } else if (x === y || y === z) {
        console.log("two sides are equels")
    } else {
        console.log("no one is equeal")
    }
}
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is fizzBuzz")
    } else if (i % 3 === 0) {
        console.log(i + " is fizz")
    } else if (i % 5 === 0) {
        console.log(i + " is buzz")
    } else {
        console.log(i + " is not a fizz and buzz")
    }
}