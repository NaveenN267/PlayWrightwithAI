function getready() {
    return Promise.resolve("Get ready")
}
async function rugh() {  // if it is an function will use async 
    let run = await getready(); // if it is an statement will use await
    console.log(run);
}
rugh();
//============================================
async function getin() {
    try {
        let ret = await Promise.reject("Rejected")
    }
    catch (Error) {
        console.log("Error : " + Error)
    }
    finally {
        console.log("Executed finally")
    }
}
getin();
//======================================================
