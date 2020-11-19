const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

const articleCtrl = require('../controllers/article')

router.post('/', articleCtrl.createArticle);  

router.get('/:id', articleCtrl.getOneArticle);

router.get('/', articleCtrl.getAllArticles);

router.put('/:id', verify, articleCtrl.modifyArticle)

router.delete('/:id', articleCtrl.deleteArticle)

module.exports = router;