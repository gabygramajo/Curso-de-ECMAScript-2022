// Declarar y asignar un valor con var
var lastName = 'David';
// reasignar con var
lastName = 'Oscar';
console.log(lastName); //>> Oscar

// Variables en ES6

// Declarar y asignar un valor con let
let fruit = 'Apple';
// reasignar con let
fruit = 'kiwi';
console.log(fruit); //>> Kiwi


// Declarar y asignar un valor con const
const animal = 'Apple';
// reasignar con const
animal = 'kiwi';
console.log(animal); //>> TypeError: Assignment to constant variable.

// # Ejemplo 2 - Scope

const fruits = () => {
  if(true) {
    var fruit1 = 'Apple'; // var tiene un scope global - function scope
    let fruit2 = 'Kiwi'; // let no tiene un scope global - block scope
    const fruit3 = 'Banana'; // const no tiene un scope global - block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}
fruits();
//>> Apple
//>> ReferenceError: fruit2 is not defined