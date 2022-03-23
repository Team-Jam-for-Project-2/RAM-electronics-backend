const express = require('express');
const User = require('../db/models/users');
const bcrypt = require('bcrypt');

const router = express.Router();

// SIGN UP
// POST /api/signup
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
});

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {});


//to hash the password
router.post('/signup', async (req, res, next) => {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ email, password });
      res.status(201).json(user);
    } catch (error) {
      return next(error);
    }
  });



module.exports = router;
