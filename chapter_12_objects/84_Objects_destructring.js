const user = { name: "Naveen", city: "Hyderabad", age: 30 };

//Basic_destructring
const { name, age } = user;
console.log(name);
console.log(age);

//ReName variables
const det = { name: "Namala", city: "Hyderabad", age: 30, are: "vernkat" };

const { name: name1, city: Location } = det;
console.log(name1);
console.log(Location);

//Default values
//if variable value is found will print form the object or else new valu will print
const { are = "Annoji" } = det;
console.log(are);


//Objects inside the objects
const data = {
    name: "Naveen",
    age: {
        chil: 32,
        area: {
            vil: "Peddaamma",
        }
    }
}
console.log(data.age.area.vil);
console.log(data.age);


//Spread(...)
const obj1 = { a: 1, b: 3 };
const obj2 = { c: 4, d: 6 };
const copy = { ...obj1 };
console.log(copy);