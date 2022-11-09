
// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; 
console.log(a, b);
//>> Apple Banana

// Object destructuring
let user = { username: 'Oscar', age: 34 }
let { username, age } = user;
console.log(username, age);
//>> Oscar 34

const person = {name: "Gaby", lastName: "Rojas", age: 23}

function getProp( {name, lastName, age} ) {
  console.log(name, lastName, age);
}

getProp(person);
//>> Gaby Rojas 23

// spread Operator

let person2 = { name: 'oscar', age: 32}
let country = 'MX';

// ej 1
let data = { ...person2, country }
console.log(data);
//>> { name: 'oscar', age: 32, country: 'MX' }

// ej 2
data = { id: 1, ...person2, country }
console.log(data);
//>> { id: 1, name: 'oscar', age: 32, country: 'MX' }

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 1, 2, 3);
//>> [ 1, 2, 3 ]
//>> 2

// reto 1

function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, 
  json2 = {
    age: 12,
    color: "Blanco"
  }) {
  
  return {...json1, ...json2};
}
console.log( solution() );

console.log( solution({
  name: "Bigotes",
  food: "Pollito"
}) );