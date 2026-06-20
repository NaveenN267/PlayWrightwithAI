function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}
//async and await are keywords that provide a cleaner, 
//synchronous-looking syntax for working with Promises
//To escape from the callback hell they introduced the async and await
function login() {
    return new Promise(function (resolve) {
        resolve("logged in");
    });
}

function savebut() {
    return new Promise(function (resolve) {
        resolve("Consoeld");
    })
}

async function execute() {
    let resul1 = await openBrowser();
    console.log(resul1);
    let resut2 = await login()
    console.log(resut2);
    let resut3 = await savebut()// if a method returning 'Promise' will use 'await'
    console.log(resut3);
}
execute();