// Variable declarations
let userName = "John";        // Camel case for variables
const MAX_COUNT = 100;        // Uppercase for constants
var _privateVar = "secret";    // Underscore prefix for private
let $element = document.getElementById("myDiv");  // Dollar sign for DOM elements

let className = "name";
const MY_COUNT = 100;
let _private = "secreate";
let $element = document.getElementById("ID");

// Function names
function calculateTotal(price, tax) {  // Camel case for functions
    return price + tax;
}

// Class names
class UserProfile {            // Pascal case for classes
    constructor(name) {
        this.name = name;
    }
}

// Naming Convention Examples
// Camel Case (common in JavaScript):
let firstName = "Alice";
let userEmailAddress = "alice@example.com";
let isUserLoggedIn = true;
let getUserData = () => { };      // Function in camel case
let totalAmount = 500;
let hasPermission = false;

// Snake Case (less common in JS, but valid):
let first_name = "Bob";
let user_email_address = "bob@example.com";
let is_user_logged_in = false;
let get_user_data = () => { };     // Function in snake case
let total_amount = 300;
let has_permission = true;

// Invalid examples (would cause errors):
// let 123abc = "invalid";     // Starts with digit
// let my-var = "invalid";     // Contains hyphen
// let if = "invalid";         // Reserved keyword

console.log(typeof (null));