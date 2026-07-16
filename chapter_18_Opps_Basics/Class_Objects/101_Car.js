class car {
    //constructor
    constructor(carName) {
        this.Name = carName;
    }

    //Behaviour
    driver() {
        console.log(this.Name);
    }
}
let obj = new car("Tesla");
obj.driver();

let obj2 = new car("Venue");
obj2.driver();