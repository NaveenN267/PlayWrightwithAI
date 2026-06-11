const data = { a: 1, b: 2, c: 3, d: 9 };
console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

const obj = { a: 1, b: 2, c: 3, };
for (const key in obj) {
    console.log(`${key}, ${obj[key]}`);
}