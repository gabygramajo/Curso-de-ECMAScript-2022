// borrar espacios en un string

const hello = '        Hello World!     ';
console.log( hello );
//>> '        Hello World!          '

console.log( hello.trimStart() );
//>> 'Hello World!     '
console.log( hello.trimEnd() );
//>> '         Hello World!'

