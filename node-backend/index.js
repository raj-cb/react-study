const express = require('express');
const cors = require('cors');
const con = require('./config.js');
const userController = require('./controllers/userController')

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001, (response, err) => {
    if(err) console.log(err)
    console.log('server listening on port 3001');
})

app.get('/', async (req, res) => {
    res.send('hello')
})

app.post('/api/login', userController.login)
app.post('/api/register', userController.register)