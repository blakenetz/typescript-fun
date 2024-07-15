/** @see https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics */
function identity<Type>(arg: Type): Type {
  return arg;
}

/** type = `string  */
const results1 = identity<string>("");

/** type = `string  */
var results2 = identity("");

/** type = `"hello"`  */
const results3 = identity("hello");

var stringVar = "hello!";
/** type = `string  */
const results4 = identity(stringVar);

const constVar = "hello!";
/** type = `"hello"`  */
const results5 = identity(constVar);

/** type = `string  */
var results6 = identity(constVar);
