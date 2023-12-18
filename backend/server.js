const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./mongoDB/connectDatabase.js");
const userRoutes = require("./mongoDB/userRoutes.js");
const cookieParser = require("cookie-parser");
const updateRouter = require("./updateRouter/updateProfile.js");
const forgot_password = require("./forgotPassword/forgetPasswordRouter.js");
const editProfile = require("../backend/mongoDB/editProfile.js");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json()); // This line is enough to parse JSON in the request body
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
connectDatabase(); // Connects the server to MongoDB

app.use("/cashcalc", userRoutes); // Routes defined in userRoutes.js
app.use("/cashcalc/update", updateRouter);
app.use("/cashcalc/forgot/", forgot_password);
app.use("/cashcalc/edit", editProfile);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  if(process.env.NODE_ENV === "production"){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res)=>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html" ))
  );
}else{
  app.get("/", (req, res) =>{
    res.send("API is running....");
  });
});
