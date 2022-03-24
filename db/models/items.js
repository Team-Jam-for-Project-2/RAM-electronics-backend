const ReviewSchema = require("./reviews");
const mongoose = require("../connection");
const Schema = mongoose.Schema;
const path = require("path");

const ItemSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    price: String,
    category: String,
    _id: Number,
    quantity: Number,
    reviews: [ReviewSchema],
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
