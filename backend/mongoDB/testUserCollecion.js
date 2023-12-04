//must include this line in order to save to the database. follow the structure below. do not make a function.
const userSchema = require("./userSchema.js");

//simple function to see how to save large amount of data in mongoDB using different types
//not needed to save with a function, just needed to test in server.js

function test() {
  const e = new userSchema();
  e._id = "2";
  e.user_id = "2";
  e.email = "idkwhatever@gmail.com";
  e.password = "plaintext$300";
  e.budget = 2000;
  e.monthly_income = [{ income_id: "2", total: 6500 }]; //monthly_income must be an object when saving, same goes for monthly expenses
  e.save();
}

module.exports = test;
