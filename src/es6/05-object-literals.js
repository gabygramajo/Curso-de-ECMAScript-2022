
// enhanced object literals 

// ES5
function newUser(user, age, coutry) {
  return {
    user: user,
    age: age,
    coutry: coutry,
  }
}
console.log( newUser("gndx", 32, 'MX') );

// ES6
function newUser(user, age, coutry) {
  return {
    user,
    age,
    coutry,
  }
}
console.log( newUser("gndx", 32, 'MX') );
