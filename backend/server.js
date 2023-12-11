const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./mongoDB/connectDatabase.js");
const userRoutes = require("./mongoDB/userRoutes.js");
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
connectDatabase(); //connects server to mongoDB

//const pass = "Hash$2001please"; //plntxt password to test hash function
//const hash = "$2b$10$bot0aLZDTTAZ3rCfMKtw2u2MK4apmc.W9y7I9X90CTcs3ZS.Cr1w."; //old iteration of hashed pass(will always return true)
//auth(pass); //function to auth(hashing and salting) in auth.js
//validate(pass, hash); //function to validate password and hash matching
//test(); //function to test new schema for cashcalc

// app.use("/userPasswords", testRoutes); //test route to displays data(personal for auth testing purposes, will remove later)
app.use("/cashcalc", userRoutes); //localhost::5000/cashcalc, and corresponding paths in userRoutes.js

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
