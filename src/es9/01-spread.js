const user = { username: "gndx", age: 34, country: "GT" };
const { username, ...values } = user;
console.log(username);
console.log(values);
