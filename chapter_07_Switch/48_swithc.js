let num = 70;
switch (true) {
    case (num >= 90):
        console.log(num + " top performance ")
        break;
    case (num >= 80):
        console.log(num + " good met expectation")
        break;
    case (num >= 60):
        console.log(num + " good ovaral")
        break;
    case (num >= 50):
        console.log(num + " improve little more")
        break;
    case (num >= 40):
        console.log(num + " it's not good ")
        break;
    default:
        console.log("nothing is matched")
}