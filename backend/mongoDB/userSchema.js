const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId,
    required: false,
  },
  user_id: {
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
      name: {
        type: String,
        required: false,
      },
      total: {
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
