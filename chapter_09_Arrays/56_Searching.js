let status = ["Pass", "Fail", "Skip", "Fail", "Nill"]
console.log(status.indexOf("Fail"));// it will retun the first index elemnt of the list
console.log(status.indexOf("Not")); //  -1 will retun if not found

console.log(status.lastIndexOf("Fail")) // it will rerun last matching index(search for end)


let num = [20, 30, 35, 40, 45, 50]
let found = num.find(x => x > 30); // find() will find first matching element
console.log(found);

let filter = num.filter(x => x >= 35) //filter() will filter all the mathing elements
console.log(filter);

let last = num.findLast(x => x >= 35) //filter() will filter the last mathing elements
console.log(last);

let lastindex = num.findLastIndex(x => x >= 35) //filter() will filter the last mathing index number
console.log(lastindex);