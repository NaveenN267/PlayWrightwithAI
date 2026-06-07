function result(a, b, c) {
    return a + b + c;
}
let num = [12, 5, 9, 8]
console.log(num);
let prit = result(...num);
console.log(prit);

let respo = [200, 201, 404];
function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let prin = hasError(...respo);
console.log(prin);


//==========================================
let nave = "Naveen";
function details() {
    let age = "30";
    console.log(nave);
    console.log(age);
}
details()
console.log(nave);
//console.log(age);//here will get error bacuse age is defined in side the method con's accessable out side

//====================================================
//Nested scope or Block scope

let number = 20;
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);
        inner();
        console.log(y);
    }
}
outer();

function outers() {
    let msg = "hello"
    console.log("called outer");
    function inne() {
        console.log(msg);
    } return inne;
}
let out = outers();
out();
//===========================================

function maximum(max) {
    let attem = 0;
    function mini(mini) {
        attem++;
        if (attem > max) {
            return `${mini} reached the maximum ${max}`;
        }
        return `${attem}/${max} times executed`;
    } return mini;
}
let func = maximum(2);
console.log(func("login"));
console.log(func("login"));
console.log(func("login"));
