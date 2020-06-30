// spread used to split up array or object elements

const numbers = [1, 2, 3];
const nums = [...numbers, 4];
console.log(nums); // [ 1, 2, 3, 4 ]

const person = {
  name: "Ahmed",
};
const newPerson = {
  ...person,
  age: 26,
};
console.log(newPerson); //{ name: 'Ahmed', age: 26 }

// rest used to merge list of arguments into an array

const myFilter = (...args) => args.filter((el) => el === 1);
console.log(myFilter(1, 2, 3, 4, 5)); // [1]
