const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
    console.log(req.body);
    res.send(req.body)
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