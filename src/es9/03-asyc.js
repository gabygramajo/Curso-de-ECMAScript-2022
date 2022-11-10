// Asyc para las iteraciones.

async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then( response => console.log(response.value) );
other.next().then( response => console.log(response.value) );
other.next().then( response => console.log(response.value) );
console.log('hello');

/*
hello
1
2
3
*/ 

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['Oscar', 'Davis', 'Ana']);
console.log('After');
/*
After
Oscar
Davis
Ana
*/ 