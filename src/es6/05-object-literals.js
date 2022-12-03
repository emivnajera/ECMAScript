// enahced obnject literals

function newUser(user, age, country,uID) {
  return {
    user,
    age,
    country,
    id:uID,
  };
}
console.log(newUser("Emiliano",22,"Guatemala",1));
