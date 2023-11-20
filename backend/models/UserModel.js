// user.js
const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  description: String,
  date: Date,
});

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  description: String,
  date: Date,
});

const savingSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  description: String,
  date: Date,
});

const userSchema = new mongoose.Schema({
  username: String,
  incomes: [incomeSchema],
  expenses: [expenseSchema],
  savings: [savingSchema],
  // Add other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
