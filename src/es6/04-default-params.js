function newUSer(name, age, country) {
  var name = name || "Oscar";
  var age = age || 34;
  var country = country || "Guatemala";
  console.log(name, age, country);
}

newUSer();
newUSer("Emiliano", 22, "Costa Rica");

function newAdmin(name = "Oscar", age = 34, country = "Guatemala") {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Emiliano', 22, 'Costa Rica')