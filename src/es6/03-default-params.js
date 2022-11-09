// parámetro por defecto en ES5
function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'MX';
  console.log(name, age, country);
}
newUser(); //>> Oscar 34 MX
newUser('David', 21, 'CO'); //>> David 21 CO

// parámetro por defecto en ES6
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
  console.log(name, age, country);
}
newAdmin(); //>> Oscar 32 CL
newAdmin('Ana', 23, 'PE');//>> Ana 23 PE