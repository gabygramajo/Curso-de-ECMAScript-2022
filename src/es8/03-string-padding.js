const string = 'Hello';

console.log( 'longitud de string: ', string.length);

// El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.
// Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

console.log( string.padStart(7, 'hi') );
// >> hiHello
console.log( string.padEnd(8, 'hi') );
// >> Hellohih
console.log( string.padStart( string.length + 4 , 'hi') );
// >> hihiHello
console.log( string.padEnd( string.length + 3 , 'hi') );
// >> Hellohih