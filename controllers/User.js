const express = require('express');
const User = require('../db/models/users');
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');

const router = express.Router();

// SIGN UP
// POST /api/signup
//to hash the password

router.post('/signup', (req, res, next) => {
    bcrypt
      .hash(req.body.password, 10)
      .then(hash =>
        ({
          email: req.body.email,
          password: hash
        })
      )
      .then(user => User.create(user))
      .then(user => res.status(201).json(user))
      .catch(next);
  });


// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then((user) => createUserToken(req, user))
      .then((token) => res.json({ token }))
      .catch(next);
  });
  






module.exports = router;
