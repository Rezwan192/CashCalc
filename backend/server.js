const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const auth = require("./authentication/auth.js");
const validate = require("./authentication/validate.js");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());

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
