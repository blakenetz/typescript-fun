"use strict";
/** @see https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics */
function identity(arg) {
    return arg;
}
/** type = `string  */
const results1 = identity("");
/** type = `"hello"`  */
const results2 = identity("hello");
var stringVar = "hello!";
/** type = `string  */
const results3 = identity(stringVar);
const constVar = "hello!";
/** type = `"hello"`  */
const results4 = identity(constVar);
