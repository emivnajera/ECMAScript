const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hola");
    } else {
      reject("No jalo");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finnaly"));
