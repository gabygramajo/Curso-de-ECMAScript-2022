// metodos setters and getters privados con #

// declarando una clase
class Person {}

// instanciando un objeto de la clase Person
const newPerson = new Person();

// métodos en Clases
class User {
  // metodo
  greeting() {
    return 'Hello';
  }
}
const gndx = new User();
console.log(gndx.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());

// constructor
class User {
  //constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
}
const david = new User();

// this: hace referencia al objeto padre que lo contiene

class User1 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new User1('Ana');
console.log( ana.greeting() );

// metodos setters and getters privados con #

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return 'hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #getUserAge() {
    return this.age;
  }
  set #setUserAge(newAge) {
    return this.age = newAge;
  }
  showAge() {
    return this.#getUserAge;
  }
}

const user1 = new User('David', 15);
console.log( user1.getUserAge ); // undefined
console.log( user1.showAge() ); // 15
console.log( user1.setUserAge = 20 );
console.log( user1.showAge() ); // 15