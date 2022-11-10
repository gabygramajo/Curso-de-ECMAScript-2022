const user = { username: 'gndx', age: 34, county: 'CO'};

const {username, ...values} = user;

console.log(username);
// >> gndx
console.log(values);
// >> { age: 34, county: 'CO' }
