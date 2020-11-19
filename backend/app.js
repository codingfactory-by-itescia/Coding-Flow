const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();

//Import Routes
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/posts');
const headerRoute = require('./routes/header');
const userRoute = require('./routes/user')

mongoose.connect('mongodb+srv://Yanis:CU6U1mV3wpnGoGaP@cluster0.kjjtc.mongodb.net/<coverflow>?retryWrites=true&w=majority',
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
app.use('/api', userRoute)

module.exports = app;