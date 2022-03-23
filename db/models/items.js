const mongoose = require('../connection');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  image: String,
  description: String,
  price: String,
  category: String,
  _id: Number,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
