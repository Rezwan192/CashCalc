const bcrypt = require("bcrypt");
const authSchema = require("../mongoDB/authSchema.js");

/*
rounds refer to hashes/sec module will do to hash a password. integer does not reflect literal 
hashing/second. if rounds = 8, equates to ~40 hashes/sec. in this case, 10 gives us 10 hashes/sec.
*/

function auth(pass) {
  const saltRounds = 10;

  bcrypt
    .hash(pass, saltRounds) //salts first, then hash
    .then((hash) => {
      //console.log(`Hash: ${hash}`); //testing to see each hash iteration in console, will remove later
      const e = new authSchema({ password: hash }); //adds a new item in userpasses, that being hashed pass, may remove later
      e.save(); //saves hashed password into mongoDB(success), may remove later
    })
    .catch((err) => console.error(err.message));
}
module.exports = auth;
