const express = require("express");
const userPass = require("./authSchema.js");
const router = express.Router();

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

//the intent is to have a route to sort hashed passwords by id
//why? testing to see how to req by params from db, but function seems to not be working, as well as not sending 404 response
//possible method to get data via id, maybe add id in schema? still trying ideas
router.get("./:id", async (req, res) => {
  try {
    const e = await userPass.findById(req.params.id); //finds specific id and stores corresponding data in e, but not working
    if (!userPass) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(e);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

module.exports = router;
