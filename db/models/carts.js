const mongoose = require('../connection');
const path = require('path');

const CartSchema = new mongoose.Schema({
  item: [],
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
