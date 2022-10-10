const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i3o3tur.mongodb.net/socialNetworkDB?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Mongoose is happy!!!!');
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}!`);
});