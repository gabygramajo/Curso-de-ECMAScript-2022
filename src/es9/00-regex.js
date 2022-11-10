// expresiones regulares para obtener datos de una fecha

const regex = /(\d{4})-(\d{2})-(\d{2})/;

// ejecutando nuestra regex 
const matchers = regex.exec('2022-01-01');
console.log(matchers);
console.table( matchers );
/* output >>
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/ 