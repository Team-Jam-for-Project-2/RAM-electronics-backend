const mongoose = require("../connection");
const path = require("path");

const CartSchema = new mongoose.Schema({
  id: String,
  quantity: Number,
  item: [ItemSchema],
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
