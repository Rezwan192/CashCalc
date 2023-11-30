const bcrypt = require("bcrypt");

/*
rounds refer to hashes/sec module will do to hash a password. integer does not reflect literal 
hashing/second. if rounds = 8, equates to ~40 hashes/sec. in this case, 10 gives us 10 hashes/sec.
*/

function auth(pass) {
  const saltRounds = 10;
  bcrypt
    .hash(pass, saltRounds) //salts first, then hash
    .then((hash) => {
      console.log(`Hash: ${hash}`);
      //code to paste to store in DB
    })
    .catch((err) => console.error(err.message));
}
module.exports = auth;
