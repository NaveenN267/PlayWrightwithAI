function caluclate(total, pass) {
    return (pass / total * 100).toFixed(2);
}
let resu = caluclate(100, 60)
console.log(resu);