function name(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 ok")
        }, 10)
    })
}

async function reqest() {
    console.log("Login completed")
    let start = Date.now();

    let r = await name("login successfull")
    console.log(r);
    let r2 = await name("opend dashboard")
    console.log(r2);
    let r3 = await name("sample test completed")
    console.log(r3);

}
reqest();