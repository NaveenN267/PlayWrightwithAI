let list = ["Naveen", "Geetha", "Sahasrika", "Naveen"]
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

console.log("------")

for (list of list) {
    console.log(list);
}

console.log("------")

let lists = ["Naveen", "Geetha", "Sahasrika", "Naveen"]
lists.forEach((test, index) => {
    console.log(test, index);
});

console.log("------")
