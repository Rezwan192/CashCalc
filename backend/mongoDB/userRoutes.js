const express = require("express");
const userData = require("./userSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");


const router = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
const validateFields = (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    // If any of the required fields is missing, throw an error
    return res.status(400).json({ error: 'Please add all fields' });
  }

  // If all required fields are present, proceed to the next middleware or route
  next();
};


// localhost:5000/cashcalc
router.get("/", verifyToken, async (req, res) => {
  try {
    const e = await userData.find({});
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// localhost:5000/cashcalc/:id
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const e = await userData.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// localhost:5000/cashcalc/income/:id
router.get("/income/:id", verifyToken, async (req, res) => {
  try {
    const e = await userData.findById(req.params.id, "monthly_income");
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// localhost:5000/cashcalc/expenses/:id
router.get("/expenses/:id", verifyToken, async (req, res) => {
  try {
    const e = await userData.findById(req.params.id, "monthly_expenses");
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// Login route
router.post("/login", validateFields, async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await userData.findOne({ email });
  if (!user) return res.status(400).json({ message: "Email is not found" });

  try {
    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create and assign a token using the user object
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Logged in" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error during login" });
  }
});




router.post("/register", validateFields, async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;
  // Check if the user already exists
const existingUser = await userData.findOne({ email });
if (existingUser) {
  // Return a response with a message
  return res.status(400).json({ message: "Email is already registered", userData: req.body });
}


  try {
    // Generate a salt with a specified number of rounds (e.g., 10)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);  // <-- Error here

    // Create a new user
    const newUser = new userData({
      email,
      password: hashedPassword,
      name,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Create and assign a token for the newly registered user
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Registration successful", user: savedUser });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error registering user" });
  }
});


module.exports = router;
