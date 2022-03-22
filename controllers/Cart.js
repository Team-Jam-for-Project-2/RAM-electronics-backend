const express = require('express');
const router = express.Router();
const Cart = require('../db/models/carts');

// INDEX: GET all carts
router.get('/', async (req, res) => {
  try {
    await Cart.find().then((carts) => {
      res.json(carts);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
