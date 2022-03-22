const mongoose = require('../connection');

const CartSchema = new mongoose.Schema({
  id: String,
  quantity: Number,
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
