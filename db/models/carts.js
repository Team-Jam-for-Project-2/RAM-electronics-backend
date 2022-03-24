const mongoose = require("../connection");
const path = require("path");

const CartSchema = new mongoose.Schema({
  id: 1,
  item: [{ ref: "Item", type: mongoose.Schema.Types.ObjectId }],
  quantity: 0,
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
