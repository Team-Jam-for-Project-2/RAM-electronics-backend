const express = require('express');
const router = express.Router();
const Cart = require('../db/models/carts');
const path = require('path');

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

// SHOW: GET one cart
router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart) {
      res.json(cart);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

// CREATE: POST a new cart
router.post('/', async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE: EDIT a cart
router.put('/:id', async (req, res) => {
  try {
    const updatedCart = req.body;
    const updatedInfo = await Cart.findByIdAndUpdate(
      req.params.id,
      updatedCart,
      { new: true }
    );
    res.json(updatedInfo);
  } catch (error) {
    console.log(error);
  }
});

// DELETE: REMOVE a cart
router.delete('/:id', async (req, res) => {
  try {
    const cartToDelete = await Cart.findByIdAndDelete(req.params.id);
    if (cartToDelete) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
