const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/findUser/:email', userCtrl.getOneUser);

module.exports = router