//normal array and it's called 2D array
let arra = [1, 2, 3, 4, 5, 6]; //Row =1, Col=6 and size =1*6


let grid = [ //here all the Row =i ,Col=j and the size of the array is 3*3
    [1, 2, 3],
    [4, 5],
    [7, 8, 9]
]
//accessing the array
console.log(grid[0][0]);
console.log(grid[1][1])

console.log(grid.length);// it will print Row length
console.log(grid[1].length)//it will print Col lenght(Rows.lenght will be coloum length)

for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        console.log(grid[i][j])
    }
    console.log(" ")
}