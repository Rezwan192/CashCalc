const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
