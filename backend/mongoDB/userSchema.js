const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  password_length: {
    type: Number,
    required: false,
  },
  profileImage: {
    data: Buffer, // Binary data for the image
    contentType: String, // MIME type of the image (e.g., 'image/jpeg', 'image/png')
  },
  budget: {
    type: Number,
    required: false,
  },
  savings: {
    type: Number,
    required: false,
  },
  target_savings: {
    type: Number,
    required: false,
  },
  monthly_income: [
    {
      income_id: {
        type: String,
        required: false,
      },
      source: {
        type: String,
        required: false,
      },
      category: {
        type: String, 
        required: false,
      },
      date: {
        type: Date,
        required: false,
      },
      amount: {
        type: Number,
        required: false,
      },
    },
  ],
  monthly_expenses: [
    {
      expense_id: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: false,
      },
      total: {
        type: Number,
        required: false,
      },
    },
  ],
});

const userData = mongoose.model("userData", userSchema);
module.exports = userData;
