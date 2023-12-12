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
router.put('/update-passwordAndEmail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword, newEmail } = req.body;
   // Generate a salt with a specified number of rounds (e.g., 10)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    const updatedUser = await userData.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the new email is already in use
    const existingUserWithEmail = await userData.findOne({ email: newEmail });

    if (existingUserWithEmail && existingUserWithEmail._id.toString() !== id) {
      return res.status(409).json({ message: 'This email address is already in use.' });
    }

    // Update email
    const userWithUpdatedEmail = await userData.findByIdAndUpdate(id, { email: newEmail }, { new: true });

    if (!userWithUpdatedEmail) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Password and email updated successfully', user: userWithUpdatedEmail });
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