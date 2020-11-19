const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();

//Import Routes
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/posts');
const headerRoute = require('./routes/header');


mongoose.connect("mongodb+srv://Rob:robinl953.@cluster0.jpfvt.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

//Route middleware
app.use(bodyParser.json());
app.use('/api/users', authRoute);
app.use('/api/articles', articleRoute);
app.use('/api/header', headerRoute);

module.exports = app;