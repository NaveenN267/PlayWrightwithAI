const user = {
    name: "Naveen",
    age: 30,
    email: "naveen.acc2"
}

console.log(user);
console.log(user.age);
console.log(user["email"]);

//Dynamic property access
const key = "age";
console.log(user[key])

//ading and modifing access
user.sur = "namala";
user.age = 32;
console.log(user);

// Objects having functions inside
const det = {
    name: "Naveen",
    age: 32,
    add(n, m) {
        console.log(`Add number ${n + m}`);
    },
    subtract(k, l) {
        console.log(`Subtract number ${k - l}`);
    }
}
det.add(7, 5);
det.subtract(8, 3);
