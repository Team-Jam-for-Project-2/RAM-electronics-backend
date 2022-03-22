const mongoose = require('./connection');
const seedData = require('./seeds.json');
const Items = require('./models/items');


Items.deleteMany({})
    .then(() => {
        Item.insertMany(seedData).then((item) => {
            console.log('the items to sell are seeded ✅✅✅')
            console.log(item);
            process.exit();
        });
    })
    .catch((err => console.error(err)));