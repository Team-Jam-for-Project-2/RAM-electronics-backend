require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const mongoURI = process.env.DATABASE_URL;
console.log(mongoURI);

mongoose
  .connect(mongoURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((conn) => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
