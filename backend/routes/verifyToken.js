const jwt = require("jsonwebtoken");

module.exports = function (req, res, next){
    //On récupère le token qu'on a ajouté au header en so loggant
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        //Récupère l'id de l'utilisateur
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send("Invalid Token")
    }    
}

