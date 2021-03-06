const Article = require('../models/article')

//Créer un article
exports.createArticle = (req,res,next) =>{
    delete req.body._id;
    const article = new Article({
        ...req.body
    });
    article.save()
    .then(() => res.status(201).json({message: 'Objet enregistré'}))
    .catch(error => res.status(400).json({error}));
}

//Modifie un article
exports.modifyArticle = (req, res, next) => {
    Article.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
    .then(() => res.status(200).json({message: 'Objet modifié'}))
    .catch(error => res.status(400).json({error}));
}

//Supprime un article
exports.deleteArticle = (req,res,next) =>{
    Article.deleteOne({_id:req.params.id})
    .then(() => res.status(200).json({message: 'Objet supprimé'}))
    .catch(error => res.status(400).json({error}));
}

//Récupère Article
exports.getOneArticle = (req,res,next) => {
    Article.findOne({ _id:req.params.id })
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({error}))
}

//Récupère tous les articles
exports.getAllArticles = (req, res, next) => {
    Article.find()
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(400).json({error}));
}