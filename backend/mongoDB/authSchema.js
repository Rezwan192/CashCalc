const mongoose = require("mongoose");

//basic schema for auth test
const authSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
    },
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
