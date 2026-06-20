let test = new Promise(function (Resolve, reject) {
    let call = true;
    if (call) {
        Resolve("Completed the execution with True")
    } else {
        reject("Failed")
    }
})
function openBrowser() {
    return new Promise(function (resolve) {
        // Code to open the Browser
        resolve("Open the Broweser");
    })
}
function login() {
    return new Promise(function (resolve) {
        resolve("Login is done")
    })
    //console.log("Log in done");
}
openBrowser().then(function (data) {
    console.log(data)
}).then(function (msg) {
    console.log(msg);
    return login();
}).catch(function (data) {
    console.log(data)
}).finally(function (data) {
    console.log("executed")
})
