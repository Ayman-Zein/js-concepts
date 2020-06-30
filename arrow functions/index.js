/*
    normal function syntax
    function myFun(){
        // code
    }

    arrow function syntax
    const myFun = (..,..,..)=>{
        // code
    }
*/

// syntax examples

const printName = (name) => {
  console.log(name);
};
printName("Ahmed");

// if it recieve one parameter
const print = name => {
  console.log(name);
};
print("hello arrow fun");

const multiply = num => {
  return num * 2;
};
console.log(multiply(4))

// if return only one line
const mult = num =>num * 2;

console.log(mult(4))

// benifits
/**
 * solve issues with this keyword  ==> when we use (this) in arrow function
    it always keep its context and not change.
 */
