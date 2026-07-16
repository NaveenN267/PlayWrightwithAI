export let Base_Url = "https:app.testingacadamy.com";
let naveen = "Namala Naveen";

export function Case(name) {
    return name.toUpperCase();
}

let result = Case(naveen);
//console.log(result);

export default function mess(message) { // when importing this utills this function will be default
    console.log("[LOG] -Defaul " + message)
}

export function logers(message) {
    console.log("[LOG] - " + message)
}