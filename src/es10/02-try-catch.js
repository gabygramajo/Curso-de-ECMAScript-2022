
try {
  hello();
} catch ( error ) {
  console.log( error );
  // >> ReferenceError: hello is not defined
}


try {
  hello();
} catch { // uso opcional de usar el parametro de error
  console.log( 'Esto es un error' );
  // >> Esto es un error
}