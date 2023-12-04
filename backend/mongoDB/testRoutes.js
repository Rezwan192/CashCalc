const express = require("express");
const userPass = require("./authSchema.js");
const router = express.Router();

/*
personal file to test how to fetch from db using these paths, will remove later
*/

//root route, sends all data in collection at localhost:${port}/userPasswords
router.get("/", async (req, res) => {
  try {
    const e = await userPass.find({}); //.find() built in methodl; stores all data in collection in e
    res.json(e); //returns json data of userPass
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

//sends specific data related to id in collection at localhost:${port}/userPasswords/id_number
router.get("/:id", async (req, res) => {
  try {
    const e = await userPass.findById(req.params.id); //finds specific id and stores corresponding data in e
    if (!userPass) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e); //returns json data of userPass/:id
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

module.exports = router;
