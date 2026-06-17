let test = new Promise(function (Resolve, reject) {
    let call = true;
    if (call) {
        Resolve("Completed the execution with True")
    } else {
        reject("Failed")
    }
})
function login() {
    return new Promise(function (Resolve) {
        Resolve("Login is done")
    })
    //console.log("Log in done");
}
test.then(function (data) {
    console.log(data)
}).then(function (login) {
    console.log(login);
    return login();
}).catch(function (data) {
    console.log(data)
}).finally(function (data) {
    console.log("executed")
})
