const promise1 = new Promise( (resolve, reject) => resolve('Promesa 1 resuelta') );
const promise2 = new Promise( (resolve, reject) => reject('Ups promesa 2 falló') );
const promise3 = new Promise( (resolve, reject) => resolve('Promesa 3 resuelta') );

Promise.allSettled( [promise1, promise2, promise3] )
  .then( response => console.log(response) );
/*
[
  { status: 'fulfilled', value: 'Promesa 1 resuelta' },
  { status: 'rejected', reason: 'Ups promesa 2 falló' },
  { status: 'fulfilled', value: 'Promesa 3 resuelta' }
]
*/