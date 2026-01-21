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
