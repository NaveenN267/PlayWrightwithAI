let testMatrix = [
    ["TestFail", "Pass", 200],
    ["Verfiy", "Fail", 400],
    ["Abort", "NotExe", 900]
]

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    } console.log();
}
//for 
for (let row of testMatrix) {
    for (let col of row) {
        process.stdout.write(col + " ");
    } console.log();
}
//for each
testMatrix.forEach(row => {
    row.forEach(col => process.stdout.write(col + " "));
    console.log();
});
//here for and forEach will print the same value


//Array functions
let tesmat = [
    [12, 27, 56, 78],
    [78, 44, 56, 96],
    [45, 78, 89, 24]
];
let runsome = tesmat.map(row => row.reduce((a, b) => a + b, 0));
console.log(runsome);

//taking out fail cases in the 'testMatrix'
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        if (testMatrix[i][j] === "Fail") {
            console.log(testMatrix[i][j]);
        }
    }
}