class Person {

    //Constructor
    constructor() {
        console.log("Constructor will execute first when a class object is run");
    }
    //Attributes
    name;
    Id;
    salary;
    address;

    //Behaviors, these are a person 'Behavior's
    eat() { }
    sleep() { }
    walk() { }
}

let obje_Ref = new Person();
//console.log(obje_Ref);