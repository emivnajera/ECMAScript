function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}
const it = iterate(["Emiliano", "Jose", "Alexander"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
