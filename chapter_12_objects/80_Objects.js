//In JavaScript, an object is a collection of *key-value pairs* stored in *heap memory*.
//Variables don't hold the object, object itself  they hold a *reference* (memory address) to it.
//*In Objects:*  Whenever you assign one object to another object,
//  it will always *copy the reference.*

let object = {};
let detai = {
    name: "Naveen",
    age: 30,
    rolNu: 267
};
console.log(detai);

// this is array
let array = [1, 2, 3, 1, 5];

//this is object, in objects key will not be in double quotes
let obj = { name: 'Naveen', age: 30, rolNu: 267 };

// this is JSON
let json = { "name": 'Naveen', "age": 30, "rolNu": 267 };

// we can have multiple objects like this
let obj1 = { name: 'Naveen', age: 30 };
let obj2 = { name: 'Naveen' };
let obj3 = { name: 'Naveen', age: 30, rolNu: 267 };

//we can call the objects like this

let call = { name: 'Naveen', age: 30, rolNu: 267 };

console.log(call.name);
console.log(call["name"]);// both will print the same value
//=====================================
let a = { status: "Pass" };
console.log(a.status);

let b = a;//this means copy by reference
console.log(a.status);
b.status = "fail";
console.log(a.status);
console.log(b.status);


if (a === b) { // 'a' equal to 'b' , because here it is call by reference
    console.log("True");
} else {
    console.log("False");
}
