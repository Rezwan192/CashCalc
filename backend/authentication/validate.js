const bcrypt = require("bcrypt");
/*
the hash stored in server.js is a very old salted/hashed encryption but validate will always return
true due to the fact that bcrypt can distinguish the salt and proceed to decrypt the hash from there.
no matter how many times we refresh the server, and the function generates a new hash from there,
it will always return true. when linking our DB to store the hash, should probably stick to auto 
generating once for each password to avoid any confusion/clutter.
*/

//TODO: fetch/get data from server to pass hashed password in hash param
function validate(pass, hash) {
  bcrypt
    .compare(pass, hash) //compares if password is same as hashed password
    .then((res) => {
      //console.log(res); //in console will display logical value if user pass matches hashed pass, will remove later
    })
    .catch((err) => console.log(err.message));
}
module.exports = validate;
