const mongoose = require("mongoose");

//missing profile_picture, need to do UUID type
//if failure, may look into GridFS

const userSchema = mongoose.Schema([
  {
    _id: {
      type: String,
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
    //insert profile_picture: [] once solution determined
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
        recipient: {
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
  },
]);

const userData = mongoose.model("userData", userSchema); //userData tied to schema
module.exports = userData;
