function details(name, age = 25, prof = "IT") {
    console.log(`he is ${name} and his age is ${age} and working in ${prof}`);
}
details("Naveen");
details("Namala", 30, "Software")// we can give dynamic values, it will replace original values

function namala(name, exp, company) {
    return `${name} and working exp is ${exp} in ${company}`;
}
namala("Naveen", 7, "aspire");// it won't print untill assin
const re = namala("Naveen", 7, "aspire");
console.log(re);