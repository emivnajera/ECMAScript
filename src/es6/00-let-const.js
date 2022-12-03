var lastname = "Velasquez";
lastname = "Najera";
console.log(lastname);

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const animal = "Dog";
try {
  animal = "Cat";
} catch (error) {
  console.log(error);
}

console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; //function scope
    let fruit2 = "Kiwi"; //block scope
    const fruit3 = "Banana"; //block scope
  }
  console.log(fruit1);
  try {
    console.log(fruit2);
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(fruit3);
  } catch (error) {
    console.log(error);
  }
};
