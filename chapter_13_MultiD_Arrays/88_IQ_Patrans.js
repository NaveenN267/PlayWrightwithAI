//Patrans program

let n = 3;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += (j >= 1 ? " " : " ") + j;
    }
    console.log(row.trim());
}



// for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row.trim());
// }

// console.log();
// for (let i = n; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//         row += (j > 1 ? " " : " ") + j;
//     }
//     console.log(row.trim());
// }


let k = 5

for (let i = 1; i <= k; i++) {
    let ro = " ";
    for (let j = 1; j <= i; j++) {
        ro += (j > 1 ? " " : " ") + j;
    }
    console.log(ro.trim());
}