require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  useNewUrlParser: true
}).catch(err => console.log(`ERROR: ${err}`));

const express = require('express');
const app = express();

// Body 

const routes = require('./routes.js');
app.use('/', routes);

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('/css', express.static('assets/stylesheets'));
app.set('/js', express.static('assets/javascripts'));
app.set('/images', express.static('assets/images'));

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));