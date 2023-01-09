let helloWorld: string = "Hello World";

//define object's shape
interface User {
  name: string;
  id: number;
  amount?: number; //?: optional
}

//not often used, just fo specific features
type Xuser = {
  name: string;
  age: number;
};

//declare javascript object
const user1: User = {
  name: "aa",
  id: 1,
};

//class  of type
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("jin", 1);
//

//use undefined
//use default number
//showing typr of return value
function getUserName(user: User, digit: number = 10): string {
  let name = user.name === undefined ? "no name" : user.name;
  return name;
}

//primitive type in JS: boolea, bigint, null, number, string, symbol, undefined (could be used in interface)
//+ any (allow anything), unknown(ensure someone using this type declares what type is)
// + never (not possible that this type could happen), void(function which return undefined or had no return value)

//composing types  (with unions and generics)
//unions  (type could be one of many types)
type MyBool = true | false;
//unions - literals (values are allowed to be)
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//check type
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

//generic
type StringArray = Array<string>;
type NumberAraay = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//declar type that use generic
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);
