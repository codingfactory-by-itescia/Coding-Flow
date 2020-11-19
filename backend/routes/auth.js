const router = require("./posts");
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {registerValidation, loginValidation} = require('../validation');



router.post('/register', async (req, res) => {
    
    //Check if infos are valid
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if user is already in database
    const emailExist = await User.findOne({email : req.body.email});
    if (emailExist) return res.status(400).send("Email already exist");

    const { uuid } = require('uuidv4');
    const id = uuid();

    //if everythings good we Hash the passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //and then we create a new
    const user = new User ({
        username : req.body.username,
        email : req.body.email,
        password : hashPassword,
        userId : id
        });
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(error){
        res.status(400).send(err)
        }
    
});

router.post('/login', async (req, res) =>{
    //Check if infos are valid
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if the email exists
    const user = await User.findOne({email : req.body.email});
    if (!user) return res.status(400).send("Email or Password is incorrect");

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or Password is incorrect')

    //Create and assign TOken
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    //Rajoute le token au header pour pouvoir le récupérer par la suite
    res.header('auth-token', token);
    res.header('userId', user.userId);
    res.send("Logged in")

});



module.exports = router;