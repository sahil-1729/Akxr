const tmp: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
// so whats the difference between the above two?
// if the input value given is number, then output value will also be number

// hover over these function call to see the difference
identityThree("3");
identityTwo("3");

// Another way
function identityFour<T>(val: T): T {
  return val;
}

// Custom type to add
interface Bottle {
  brand: string;
  type: number;
}

function identityFive<Bottle>(val: Bottle): Bottle {
  return val;
}

// Once you write the value as <T> that same letter has to be in the input as well as output format
function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

const getSearchProducts1 = <T>(products: T[]): T => {
  return products[0];
};

// we can add more, as much as possible like t, u
function anotheFunction<t, u>(valOne: t, valTwo: u): object {
  return {
    valOne,
    valTwo,
  };
}

interface Database {
  connection: string;
  username: string;
  password: string;
}

// here the u says ki u has to be of database type only
function anotheFunction1<t, u extends Database>(valOne: t, valTwo: u): object {
  return {
    valOne,
    valTwo,
  };
}
// isme error ayega as "d" isnt type Database
// anotheFunction1(1,"d")

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// <> matlab ki use of generic
class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

// when we do this it prints object, which should have ideally been array same for null
// console.log(typeof [1,2,3])

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// what would you do when there's array? along with number and string? 
function detectType1(val: number | string | number[]) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id:string | null){
    if(!id){
        console.error("fo")
    }
}

// we can use instanceOf to check if a variable is instance of a object or array or ... 

interface Circle{
  kind: "circle",
  radius: number
}
interface {
  kind: "circle",
  radius: number
}