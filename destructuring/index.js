// destructuring ==> extract array elements or object properties and assign them to variables

// 1-array
const numbers = [1, 2, 3, 4];
const [num1, num2] = numbers;
console.log(num1, num2); // 1 2

// 2-object
const person = {
  name: "Ahmed",
  age: 28,
};

const { name, age } = person;

console.log(name, age); // Ahmed 28
