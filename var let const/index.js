//////////////  1-scope  ////////////////
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}
varTest();

//let , const
/*
A block is a chunk of code bounded by {}. A block lives in curly braces.
Anything within curly braces is a block.
So a variable declared in a block with let  is only available for use within that block.
*/
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
letTest();

function constTest() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
constTest();

///////////////////// 2-redeclare ////////////////////
var y = 5;
var y = 10; // var variables can be re-declared and updated
console.log(y); // 10

let a = 5;
let a = 10; // SyntaxError: Identifier 'a' has already been declared
// let can be updated but not re-declared  (let a = 5; a=10 ==> update the value)
console.log(a);

const w = 5;
const w = 10; // SyntaxError: Identifier 'w' has already been declared
console.log(w);

/////////////////////////////// 3-declaration /////////////////////////
console.log(b); // undefined
// (Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution)
var b = 20;
console.log(b); // 20

/*
Just like  var, let declarations are hoisted to the top. 
Unlike var which is initialized as undefined, the let keyword is not initialized.
So if you try to use a let variable before declaration, you'll get a Reference Error.
*/
console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 30;
console.log(c);

console.log(d); // ReferenceError: Cannot access 'd' before initialization
const d = 30;
console.log(d);

///////////////////// summary ///////////////////

// var declarations are globally scoped or function scoped while let and const are block scoped.

// var variables can be updated and re-declared within its scope.
// let variables can be updated but not re-declared.
// const variables can neither be updated nor re-declared.

// They are all hoisted to the top of their scope.
// But while var variables are initialized with undefined.
// let and const variables are not initialized.

// var and let can be declared without being initialized.
// const must be initialized during declaration.
