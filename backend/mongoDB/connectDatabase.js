const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connectDatabase() {
  mongoose //will remove URI comment later on
    .connect(process.env.URI) //URI is mongodb+srv://CashCalc:CashCalc@databasetest.vsvj589.mongodb.net/?retryWrites=true&w=majority
    .then(() => console.log(`connected: ${mongoose.connection.host}`)) //displays connection
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = connectDatabase;
