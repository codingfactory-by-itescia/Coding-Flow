const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    req.header("userId");
    res.send(req.header("userId"));
})



module.exports = router;