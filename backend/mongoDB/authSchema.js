const mongoose = require("mongoose");

//basic schema for auth test, our actual schema was not created just testing and learning how it works
const authSchema = mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true } //included because prof included in his example, may remove later
);

//userPass is our model, but on mongoDB it adds "es" to the end of model in collection
const userPass = mongoose.model("userPass", authSchema); //userPass tied to schema

module.exports = userPass;
