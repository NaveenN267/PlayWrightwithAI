function rest(status) {
    if (status >= 200 && status <= 300)
        return "success"
    if (status >= 400 && status < 500)
        return "client error"
    if (status > 500)
        return "Internal error"
}
let res = rest(250);// when we have return type we musth assing to variable then print
console.log(res);

function name(test) {
    console.log(`Loing to the ${test}`)
}
let result = name("Naveen");
console.log(result);// Undefined becasue there is not return type in function
name("Naveen")


grat("Navma")

function grat(tests) {
    return `Loing to the ${tests}`;
}// no value will print here beacuse the value assined before fucntion it's in TDZ

greeth("naveeen");
const greeth = function (testing) {
    return `naveeen ${testing}`;
};// will get reference error here because don't apply TDZ here 

