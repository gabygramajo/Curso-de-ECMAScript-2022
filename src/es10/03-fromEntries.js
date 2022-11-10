//  pasar de array a objeto

const entries = new Map([['name', 'oscar'], ['age', 34]]);

console.log(entries);
//>> Map(2) { 'name' => 'oscar', 'age' => 34 }

const user = Object.fromEntries( entries );

console.log( user );
//>> { name: 'oscar', age: 34 }

// other examples

const entries2 = [['name', 'oscar'], ['age', 34]];

console.log(entries2);
//>> [ [ 'name', 'oscar' ], [ 'age', 34 ] ]

const user2 = Object.fromEntries( entries2 );

console.log( user2 );
//>> { name: 'oscar', age: 34 }