function addTwo(num: number) {
  // we aren't allowed to do this, as we mentioned that it has to be number, jiske vajah se we don't need to add logic to check whether its a number or not
  // num.toUpperCase()

  return num + 2;
}

// addTwo("5")
addTwo(5);
// when we hover over the function, it says "any" type to the parameter and returnt value

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hitesh");

// function signUpUser(name: string, email: string, isPaid: boolean) {}
// here in the given code, only second parameter me error show karega, not on the third parameter
// signUpUser("name",2,3)

// signUpUser("name", "hitesh@co.dev", false);
let loginUser = () => {};

// we can also assign default values in the function itself
function signUpUser(name: string, email: string, isPaid: boolean = true) {}
export {};

// HOW TO ADD TYPES TO RETURN VALUE IN FUNCTION
function A(a: boolean): boolean {
  return true;
}

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }

  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

// const heroes = ["thor", "ironman", "spiderman"];
const heroes = [1, 2, 3];

heroes.map((hero): string => {
  // return 1
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  // return 1
}
function handleError(errmsg: string): void {}

// There is difference between never and void, with "never" we can handle errors
function fail(msg: string): never {
  throw new Error(msg);
}

fail("asd");

const User = {
  name: "sahil",
  email: "sahil.maji@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "sahil", isPaid: true });

// How to add return type as object
function createCourse(): { name: string; price: number } {
  return { name: "S", price: 0 };
}

// Weird behaviour of typescript
// when we add new value lets say, isFree boolean, it would give error, as isFree doesn't exist in the createUser fn
// createUser({name: "s", isPaid: true, isFree: true})

// but when we store it in const and pass into fn, it will go smoothly
const tmp = { name: "s", isPaid: true, isFree: true };
// createUser(tmp)

// this is type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// here what I am doing is whenever, someone is passing using this function, it should be of a particular type, in this case its User
function createUser1(user: User): User {
  return {
    name: "",
    email: "",
    isActive: true,
  };
}

createUser1({ name: "", email: "", isActive: true });

type User1 = {
  // isse it will make sure, once its assigned i wont be able to change it
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // it marks as optional, meaning not necessary to add while creating the obj
  credDetails?: number
};

let myUser: User1 = { _id: "abcd", name: "S", email: "Sa", isActive: true };

myUser.email = "randomEmail"
// here we cant change it bc it can only be read once assigned
// myUser._id = "f"

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string 
}

// here we are mentioning to combine both
type cardDetails = cardNumber & cardDate & {
  cvv : number
}