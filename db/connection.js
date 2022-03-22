require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;

mongoose
  .connect(mongoURI)
  .then((conn) => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
