const User = require('../models/User');

exports.getOneUser = (req, res,next) => {
    User.findOne({email: req.params.email})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({error}))
}