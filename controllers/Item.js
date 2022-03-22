const express = require('express');
const Item = require('../db/models/items');
const router = express.router;


//Index: get all items
//sorry if we don't need this route
//http://localhost:4000/api/items/
router.get('/', (req, res) => {
    Item.find({}).then((data) => {
        res.json(data);
    });
});


//Show: Get one item by id
//http://localhost:4000/api/items/id
//below is await/async syntax
router.get('/:id', async (req, res) => {
    try {
        const itemToShow = await Item.findById(req.params.id);
        if (itemToShow) {
            res.json(itemToShow);
        }   else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error)
    }
})

//if above doesn't work here is promise chaining syntax below
// router.get('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then((data) => res.json(data))
//     .catch(console.error)
// })