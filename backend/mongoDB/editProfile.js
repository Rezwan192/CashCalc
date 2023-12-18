const express = require("express");
const userData = require("./userSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");


const router = express.Router();

// Update profile name
router.put('/update-profile-name/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { newName } = req.body;

    const user = await userData.findByIdAndUpdate(id, { name: newName }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile name updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update password
router.put('/update-password/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword , newEmail} = req.body;

    const user = await userData.findByIdAndUpdate(id, { password: newPassword }, { email : email }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Password updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update email
router.put('/update-email/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { newEmail } = req.body;

    const user = await User.findByIdAndUpdate(userId, { email: newEmail }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Email updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;