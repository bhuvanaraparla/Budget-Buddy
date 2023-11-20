const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/add-user', async (req, res) => {
  try {
    const { username, incomes, expenses, savings } = req.body;

    const newUser = new User({
      username,
      incomes,
      expenses,
      savings,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
