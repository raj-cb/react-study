const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    console.log(req.body);

    var user = await User.findOne({where: {email: req.body.email}});

    if(!user)
        res.status(401).send({message: 'invalid email'})
    
    var user = await User.findOne({where: {email: req.body.email}});

    var userVerified = await bcrypt.compare(req.body.password, user.password);
    
    if(!userVerified)
        res.status(401).send({message: 'invalid password'})
    
    var token = jwt.sign({email: user.email}, 'secret');
    res.status(200).send({token})
}

module.exports.register = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        // const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(data.password, 10)
        data.password = hashedPassword

        await User.create(data)
        res.status(201).send({'message': 'request recieved successfully'})
    }
    catch(err) {
        console.log(err)
        res.status(500).send()
    }
    
}