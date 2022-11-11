const users = {
  gndx: {
    country: 'MX'
  },
  ana: {
    country: 'CO'
  }
}

console.log( users.gndx );
// >> { country: 'MX' }
console.log( users.bebeloper );
// >> undefined


console.log( users.gndx.country );
// >> MX
// console.log( users.bebeloper.country );
/* >> 
console.log( users.bebeloper.country );
                             ^

TypeError: Cannot read properties of undefined (reading 'country')
*/

// Utilizando optional chainning
console.log( users?.bebeloper?.country );
// >> undefined