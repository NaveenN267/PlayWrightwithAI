let resp = new Promise(function (resolve, reject) {
    resolve({
        status: 500, msg: "Success"
    })
})
resp.then(function (resolve) {
    console.log(resolve);
})

let state = new Promise(function (resolve, reject) {
    resolve({

    })
})

