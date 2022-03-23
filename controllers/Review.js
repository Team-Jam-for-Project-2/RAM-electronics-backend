// const express = require('express');
// const router = express.Router();
// const Review = require('../db/models/reviews');

// // INDEX: GET all reviews
// router.get('/', async (req, res) => {
//   try {
//     await Review.find().then((reviews) => {
//       res.json(reviews);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // SHOW: GET one review
// router.get('/:id', async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.id);
//     if (review) {
//       res.json(review);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// // CREATE: POST a new review
// router.post('/', async (req, res) => {
//   try {
//     const newReview = await Review.create(req.body);
//     res.status(201).json(newReview);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // UPDATE: EDIT a review
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedReview = req.body;
//     const updatedInfo = await Review.findByIdAndUpdate(
//       req.params.id,
//       updatedReview,
//       { new: true }
//     );
//     res.json(updatedInfo);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // DELETE: REMOVE a review
// router.delete('/:id', async (req, res) => {
//   try {
//     const reviewToDelete = await Review.findByIdAndDelete(req.params.id);
//     if (reviewToDelete) {
//       res.sendStatus(204);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
