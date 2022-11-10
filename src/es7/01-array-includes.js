// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

let numbers = [1, 4, 3, 6, 7, 8];

console.log( numbers.includes(6) );
// >> true

console.log( numbers.includes(5) );
// >> false

const list = ['oscar', 'david', 'ana'];

console.log( list.includes('pepe') );
// >> false

console.log( list.includes('ana') );
// >> true

console.log( list.includes('Ana') );
// >> false