function normalizeJsBasicsLabel(label) {
    //let label = "Login Button";
    let prefix = "js basic "
    let low = prefix + label.toLocaleLowerCase();
    console.log(low);
    let final = low.replaceAll(" ", "-");
    console.log(final);
}
normalizeJsBasicsLabel("Login Button");