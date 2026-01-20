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
  credDetails?: number;
};

let myUser: User1 = { _id: "abcd", name: "S", email: "Sa", isActive: true };

myUser.email = "randomEmail";
// here we cant change it bc it can only be read once assigned
// myUser._id = "f"

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// here we are mentioning to combine both
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

// union is combn of 2 or more types of data that I can include in union
// Good practice : try to keep as strict as possible
let score: number | string = 33;

score = 44;

score = "55";

type User2 = {
  name: string;
  id: number;
};

type Admin2 = {
  username: string;
  id: number;
};

let hitesh: User2 | Admin2 = {
  name: "H",
  id: 123,
};

hitesh = {
  username: "HC",
  id: 123,
};

// function getDbId(id:number|string){
//   console.log("DB id is ", id)
// }

getDbId(3);
getDbId("3");

// now if I modify such that ki add a fn to lower case, then it will give error, as it can execute the method in case of number, so we need a strong check to see if its a string
function getDbId(id: number | string) {
  // when the code reached 175 line, it assumes id, can be string or Number, but once it executes 176, its confirmed that its a string
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id += 2;
  }
}

// COmmon mistake
// here we made sure, either the data can be number array or string array
const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
// What if we want both? here's the common mistake we make, and this gives error, bc here we mention string array or number array
// const data2: number[] | string[]  = [1,2,"3"]

// Solution
const data2: (number | string)[] = [1, 2, "5"];

// Also we can assign specific value in ts
let pi: 3.14;
// we can't reassign the values
// pi=4

let seatAllotment: "aisle" | "middle" | "window";

// creating tuple having specific type
const user: (string | number)[] = ["HC"];
const user1: [string, number, boolean] = ["hc", 1, true];

let rgb: [number, number, number] = [1, 2, 3];

type User3 = [number, string];
const newUser: User3 = [1, "d"];
newUser[1] = "asd";

// even though we added type in newUser we are able to push element into the constant, with the type mentioned, also it is not matching with the type User3 should have given error

newUser.push(1);

// Interface
interface User4 {
  email: string;
  userId: number;
  googleId?: string;
  readonly dbId: number;

  // startTrial: () => string;
  // This is another way of writing function
  startTrial(): string;

  getCoupon(couponname: string, val: number): number;
}

const sahil: User4 = {
  email: "h@",
  userId: 1221,
  dbId: 1,
  startTrial: () => "trial started",
  getCoupon: (name: "hitesh", val: 1) => {
    return 10;
  },
};
sahil.email = "s@gmail.com";

// we cant change it
// sahil.dbId = 223

interface User5 {
  githubToken: string;
}
// extending a interface 
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// Type and interface are very similar, almost all features of 'interface' are available in 'type'
// The major difference between 'type' and 'interface' is that 'type' is not extendable, whereas 'interface' is extendable 