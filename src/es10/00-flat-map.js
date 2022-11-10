// El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

// flat
const array = [1, 2, 3, 4 ,[1, 3, 5, 6 ,[1, 2, 4]]];

console.log(array);
// [ 1, 2, 3, 4, [ 1, 3, 5, 6, [ 1, 2, 4 ] ] ]

console.log( array.flat(3) );
// [ 1, 2, 3, 4, 1, 3, 5, 6, 1, 2, 4]

// flatMap: transforma un array
const array2 = [1, 2, 3, 4, 5];
console.log( array2.flatMap( v => [v, v *2] ) );
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/ 