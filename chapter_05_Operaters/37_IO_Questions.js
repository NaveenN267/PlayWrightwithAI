console.log("" == 0);
console.log(0 == "");
console.log("" == "0");  //it's false -> transitivity broken here

console.log(0 == false); //it's true
console.log(null == 0); //it's false -> null never become a zero
console.log(null == undefined); //it's true
console.log(null === undefined); //it's false if it is strict comparison

