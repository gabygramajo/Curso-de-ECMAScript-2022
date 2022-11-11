const anotherNumber = 2;

// validar si el valor es null con el operador Nullish coalescing
const validate = anotherNumber ?? 5;

console.log(validate);
// >> 2

function isNull( value = 2) {
  return value ?? true;
}

console.log( isNull(3) );
//>> 3
console.log( isNull(null) );
//>> true
console.log( isNull() );
//>> 2
console.log( isNull(undefined) );
//>> 2
console.log( isNull('7') );
//>> 7