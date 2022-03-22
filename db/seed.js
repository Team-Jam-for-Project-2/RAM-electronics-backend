const mongoose = require('./connection');
const seedData = require('./seeds.json');
const Item = require('./models/items');


Item.deleteMany({})
    .then(() => {
        Item.insertMany(seedData).then((item) => {
            console.log('the items to sell are seeded ✅✅✅')
            console.log(item);
            process.exit();
        });
    })
    .catch((err => console.error(err)));