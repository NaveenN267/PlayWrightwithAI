let num = [5, 4, 6, 1, 2, 3]
num.push(5, 8, 9)
console.log(num);

//Start deletecount ...itemstoAdd
num.splice(5, 1);// here '5' means index number And '1' meands delete the number
console.log(num)

num.splice(2, 0, 7) // here '0' means don't delete but add the value at index
console.log(num)

num.splice(4, 1, 9) // here '1' means delete add replace with value
console.log(num)

num.splice(1, 3, 11, 12, 13) // here '3' means number of values need to replace form index '1'
console.log(num);

let browser = ["chrome", "opera", "firefox", "safari", "edge"];

browser.pop() // remove the last element
console.log(browser);

let brow = browser.shift();//remove the first element
console.log(browser);
console.log(brow);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "safari") {
        console.log("removed the safari")
    }
}