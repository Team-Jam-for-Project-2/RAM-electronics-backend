const mongoose = require('../connection');
const Schema = mongoose.Schema;
const path = require('path');

const ReviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    // itemId: {
    //   type: Number,
    //   required: true,
    // },
    // reviewer: {
    // 	type: mongoose.Schema.Types.ObjectId,
    // 	ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);
// const Review = mongoose.model('Review', ReviewSchema);

module.exports = ReviewSchema;
