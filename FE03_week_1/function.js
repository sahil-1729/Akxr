"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // we aren't allowed to do this, as we mentioned that it has to be number, jiske vajah se we don't need to add logic to check whether its a number or not
    // num.toUpperCase()
    return num + 2;
}
// addTwo("5")
addTwo(5);
// when we hover over the function, it says "any" type to the parameter and returnt value
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hitesh");
// function signUpUser(name: string, email: string, isPaid: boolean) {}
// here in the given code, only second parameter me error show karega, not on the third parameter
// signUpUser("name",2,3)
// signUpUser("name", "hitesh@co.dev", false);
var loginUser = function () { };
// we can also assign default values in the function itself
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
// HOW TO ADD TYPES TO RETURN VALUE IN FUNCTION
function A(a) {
    return true;
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
// const heroes = ["thor", "ironman", "spiderman"];
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    // return 1
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    // return 1
}
function handleError(errmsg) { }
// There is difference between never and void, with "never" we can handle errors
function fail(msg) {
    throw new Error(msg);
}
fail("asd");
var User = {
    name: "sahil",
    email: "sahil.maji@gmail.com",
    isActive: true,
};
// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "sahil", isPaid: true });
// How to add return type as object
function createCourse() {
    return { name: "S", price: 0 };
}
// Weird behaviour of typescript
// when we add new value lets say, isFree boolean, it would give error, as isFree doesn't exist in the createUser fn
// createUser({name: "s", isPaid: true, isFree: true})
// but when we store it in const and pass into fn, it will go smoothly
var tmp = { name: "s", isPaid: true, isFree: true };
// here what I am doing is whenever, someone is passing using this function, it should be of a particular type, in this case its User
function createUser1(user) {
    return {
        name: "",
        email: "",
        isActive: true,
    };
}
createUser1({ name: "", email: "", isActive: true });
var myUser = { _id: "abcd", name: "S", email: "Sa", isActive: true };
myUser.email = "randomEmail";
// here we cant change it bc it can only be read once assigned
// myUser._id = "f"
