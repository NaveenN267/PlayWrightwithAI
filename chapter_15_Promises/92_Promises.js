let runPro = new Promise(function (resolve, reject) {
    let ready = true;
    if (ready) {
        resolve("Test will pass")
    } else {
        reject("Test will fail")
    }
})
console.log(runPro);