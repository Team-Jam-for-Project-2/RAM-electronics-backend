const mongoose = require("../connection");
const path = require("path");

const CartSchema = new mongoose.Schema({
  item: [],
  quantity: 0,
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
