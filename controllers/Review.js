const express = require('express');
const router = express.Router();
const Item = require('../db/models/items');

// CREATE: POST a new review
router.post('/', (req, res, next) => {
  const reviewData = req.body;
  const itemId = reviewData.itemId;
  //   const itemId = reviewData[_id];

  Item.findById(itemId)
    .then((item) => {
      item.reviews.push(reviewData);
      return item.save();
    })
    .then((item) => res.status(201).json({ item: item }))
    .catch(next);
});

// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Item.findOne({ 'reviews._id': id })
    .then((item) => {
      item.reviews.id(id).remove();
      return item.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

// PATCH /reviews/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const reviewData = req.body;

  Item.findOne({
    'reviews._id': id,
  })
    .then((item) => {
      const review = item.reviews.id(id);
      review.set(reviewData);
      return item.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
