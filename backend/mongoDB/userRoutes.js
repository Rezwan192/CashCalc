const express = require("express");
const userData = require("./userSchema.js");
const router = express.Router();

//localhost:5000/cashcalc
router.get("/", async (req, res) => {
  try {
    const e = await userData.find({});
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

//localhost:5000/cashcalc/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await userData.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

//localhost:5000/cashcalc/:id/income
router.get("/:id/income", async (req, res) => {
  try {
    const user = await userData.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const incomeEntries = user.monthly_income;
    if (!incomeEntries) {
      return res.status(404).json({ message: "Income entry not found" });
    }
    res.json(incomeEntries);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

//localhost:5000/cashcalc/:id/income
router.put("/:id/income", async (req, res) => {
  console.log("Request Body:", req.body); 
  const { source, category, date, amount } = req.body;
  try {
    const user = await userData.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add monthly income entry
    user.monthly_income.push({ source, category, date, amount });
    await user.save();

    res.json(user.monthly_income);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error updating monthly income" });
  }
});


//localhost:5000/cashcalc/expenses/:id
router.get("/expenses/:id", async (req, res) => {
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

module.exports = router;
