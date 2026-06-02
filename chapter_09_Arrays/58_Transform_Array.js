let score = [12, 23, 45, 56, 78, 89]

//map transform every element and changes to new arry
//based on the condition new arryw will return with same number of length
let grade = score.map(x => x > 70 ? "Pass" : "Fail");
console.log(grade);


let filter = score.filter(x => x > 75);
console.log(filter);

let totle = score.reduce((a, b) => a + b, 0)
console.log(totle);

let flat = [14, 25, 36, 47, 58, 69]
let newCom = [score, flat];
console.log(newCom.flat());