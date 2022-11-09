// generator: nos retornara una serie de valores segun el algoritmo definido

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);

console.log( it.next().value ); //>> Oscar
console.log( it.next().value ); //>> David
console.log( it.next().value ); //>> Ana
console.log( it.next().value ); //>> Ulises
console.log( it.next().value ); //>> Jennifer
console.log( it.next().value ); //>> undefined
console.log( it.next().value ); //>> undefined

function* getId() {
  const michi = 'michi';
  let id = 0;

  while (true) {
    yield ` ${michi} ${++id}`;
  }
}
const id = getId();

console.log( id.next().value );
console.log( id.next().value );
console.log( id.next().value );
console.log( id.next().value );
console.log( id.next().value );