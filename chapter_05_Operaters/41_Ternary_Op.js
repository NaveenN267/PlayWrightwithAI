let naveen = 18;
console.log(naveen >= 19 ? "he will vote" : "no vote");


let actul = 200;
let expect = 200;
let ans = actul === expect ? "pass" : "fail";
console.log(ans);

let url = "prod";
let base = "https://naveennamala.com";
let baseurl = url === "prod" ? "https://naveennamalaprod.com" : "https://naveennamalaapi.com";
console.log(baseurl);

let responsetime = 850;
let sla = 1000;
let rspt = responsetime <= sla ? "true" : "false";
console.log(`response time is ${responsetime} less than ${sla}`);


//nested ternary

let statuscode = 400;

let response = statuscode < 300 ? "success" :
    statuscode < 400 ? "sucess" :
        statuscode < 500 ? "internal error" : "no error";
console.log(`status code ${statuscode} : ${response}`)