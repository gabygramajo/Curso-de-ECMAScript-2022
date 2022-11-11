// En el navegador el objeto global es `window`, para Node.js es `global`, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a `window`, ni en el navegador podrás acceder a `global`.

// Para estandarizar el objeto global se creó `globalThis`, un objeto compatible para cualquier plataforma.

console.log( window ); // navegador

console.log( global ); // node

console.log( self ); // webworker

console.log( globalThis ); // navegador y node