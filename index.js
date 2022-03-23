// Dependencies
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 4000);
const cors = require('cors');
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Item Controller
const itemController = require('./controllers/Item');
app.use('/api/items', itemController);

// Cart Controller
const cartController = require('./controllers/Cart');
app.use('/api/carts', cartController);

// Review Controller
const reviewController = require('./controllers/Review');
app.use('/api/reviews', reviewController);

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}📺 `);
});
