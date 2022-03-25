const mongoose = require("../connection");
const path = require("path");

const CartSchema = new mongoose.Schema({
  item: [{ ref: "Item", type: Number }],
  quantity: 0,
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
