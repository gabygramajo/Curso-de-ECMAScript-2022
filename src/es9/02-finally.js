
const anotherFunction = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      resolve('Hey!!');
    } else {
      reject('Whoooops!');
    }
  })
}

anotherFunction()
  .then(response => console.log( 'Then...' + response) )
  .catch( err => console.log( 'Catch...' + err) )
  .finally( () => console.log('Finnaly') );

// Whoooops!