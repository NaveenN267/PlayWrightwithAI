class browser {
    constructor(name) {
        this.name = name;
        this.open = true;

        console.log(name + " is launched");
    }
    LaunchedBrowser() {
        console.log("launched the browser of " + name);
    }
    closedBrowser() {
        console.log("launched the browser of " + name);
    }
}
const obj = new browser("Chrome");
const obj2 = new browser("Firefox");

//console.log(obj.open);