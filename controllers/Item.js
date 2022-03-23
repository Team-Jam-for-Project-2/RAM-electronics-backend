const express = require('express');
const Item = require('../db/models/items');
const router = express.Router();
const path = require('path');

//Index: get all items
//http://localhost:4000/api/items/
router.get('/', async (req, res) => {
  try {
    await Item.find().then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.sendStatus(404);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//Show: Get one item by id
//http://localhost:4000/api/items/id
//below is await/async syntax
router.get('/:id', async (req, res) => {
  try {
    const itemToShow = await Item.findById(req.params.id);
    if (itemToShow) {
      res.json(itemToShow);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
