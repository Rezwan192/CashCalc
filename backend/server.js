const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const auth = require("./auth.js");
const validate = require("./validate.js");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());

/*
the hash stored in the var is a very old salted/hashed encryption but validate will always return
true due to the fact that bcrypt can distinguish the salt and proceed to decrypt the hash from there.
no matter how many times we refresh the server, and the function generates a new hash from there,
it will always return true. when linking our DB to store the hash, should probably stick to auto 
generating once for each password to avoid any confusion. 

*/

const pass = "Hash$2001please"; //plntxt pass to test hash function
const hash = "$2b$10$bot0aLZDTTAZ3rCfMKtw2u2MK4apmc.W9y7I9X90CTcs3ZS.Cr1w.";

auth(pass); //function to auth(hashing and salting) in auth.js
validate(pass, hash); //function to validate password and hash matching

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
