const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/findUser/:email', userCtrl.getOneUser);
router.put('/changePassword/:email', userCtrl.modifyOneUser);



module.exports = router