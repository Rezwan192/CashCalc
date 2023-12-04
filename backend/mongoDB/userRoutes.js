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

//localhost:5000/cashcalc/income/:id
router.get("/income/:id", async (req, res) => {
  try {
    const e = await userData.findById(req.params.id, "monthly_income");
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e); //returns json data of userPass/:id
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

//localhost:5000/cashcalc/expenses/:id
router.get("/expenses/:id", async (req, res) => {
  try {
    const e = await userData.findById(req.params.id, "monthly_expenses");
    if (!userData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e); //returns json data of userPass/:id
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

module.exports = router;
