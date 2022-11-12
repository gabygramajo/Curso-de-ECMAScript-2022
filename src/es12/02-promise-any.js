const promise1 = new Promise( (resolve, reject) => reject('Ups promesa 1 falló') );
const promise2 = new Promise( (resolve, reject) => resolve('Promesa 2 resuelta') );
const promise3 = new Promise( (resolve, reject) => resolve('Promesa 3 resuelta') );

// Promise.any captura la 1er promesa resuelta.

Promise.any( [promise1, promise2, promise3] )
  .then( response => console.log(response) );
// >> Promesa 2 resuelta