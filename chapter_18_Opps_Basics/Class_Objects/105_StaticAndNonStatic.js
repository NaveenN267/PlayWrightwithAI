class student {
    constructor(student_N, Roll, Address) { //these are parameters
        this.student_N = student_N; //Non static instance parameters
        this.Roll = Roll;
        this.Address = Address;
    }
    static Name = "Playwright";  //'Name' Static fileds or static properties
    static course = "Javascript";
}

let obj = new student("Naveen", 20, "Ventkatsai");//'obj' is object references
let obj2 = new student("Geetha", 45, "Annoji");
let rest = student.Name;
console.log(rest);