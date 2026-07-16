class newTc {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;

    }
    driver() {
        console.log(this.name + " is name , " + this.age + " is his age , " + this.status + " for job");
    }
}
const obj1 = new newTc("Naveen", 30, "searching");
obj1.driver();