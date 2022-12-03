class user {
  //metodos
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return "Hello Soy " + this.name;
  }
}

const gndx = new user("Emiliano");

console.log(gndx.greeting());
console.log(gndx.name);
