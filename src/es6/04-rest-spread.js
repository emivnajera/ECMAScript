// arrays destructing

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

let user = { username: "Emiliano", age: 22 };
let { username, age } = user;
console.log(username, user.age);

// spread operator
let person = { name: "oscar", age: 28 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
}

sum(1,1,2,3)