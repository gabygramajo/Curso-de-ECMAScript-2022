const array = [24, 34, 25, 24];

console.log(array); //>> [ 24, 34, 25, 24 ]
console.log(array.length); //>> 4

// ## Trailing commas
// Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.

const array2 = [24, 34, 25, 24, , , , ,];
console.log(array2); //>> [ 24, 34, 25, 24, <4 empty items> ]
console.log(array2.length); //>> 8

const array3 = [24, 34, 25, 24, , , , 36];
console.log(array3); //>> [ 24, 34, 25, 24, <3 empty items>, 36 ]
console.log(array3.length); //>> 8