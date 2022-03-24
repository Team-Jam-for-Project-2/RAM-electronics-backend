const express = require("express");
const Item = require("../db/models/items");
const router = express.Router();
const path = require("path");

//Index: get all items
//http://localhost:4000/api/items/
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
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

// CREATE
// POST /item/
router.post("/", (req, res, next) => {
  const itemData = req.body;
  Item.create(itemData)
    .then((item) => res.status(201).json(item))
    .catch(next);
});

// UPDATE
// PUT /item/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const itemData = req.body;
  Item.findOneAndUpdate({ _id: id }, itemData, { new: true })
    .then((item) => res.json(item))
    .catch(next);
});

// DESTROY
// DELETE /item/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Item.findOneAndDelete({ _id: id })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
