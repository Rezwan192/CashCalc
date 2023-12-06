const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./mongoDB/connectDatabase.js");
const userRoutes = require("./mongoDB/userRoutes.js");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
connectDatabase(); //connects server to mongoDB

app.use("/cashcalc", userRoutes); //localhost::5000/cashcalc, and corresponding paths in userRoutes.js

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
