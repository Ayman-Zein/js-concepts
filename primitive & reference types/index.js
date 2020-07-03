const num1 = 5;
const num2 = num1;
console.log(num2);
// copy value of num1 into num2
// booleans , numbers , strings are primitive type (copy the value).

// objects , arrays are reference types
const person = {
  name: "Ahmed",
};
// person obj stored in heap & const person point to its place in heap

const anotherPerson = person;
// pointer will be copied , and point to the exact same object

// if you want to take safe real copy
const person3 = {
  ...person,
};
console.log(person3); // { name: 'Ahmed' }

person.name = "Ali";
console.log(anotherPerson); //{ name: 'Ali' }
