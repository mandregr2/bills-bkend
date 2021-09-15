const userController = require('../controllers/UserController');
const AccessTokenController = require('./AccessTokenController');
const db = require("../database/db");
const jwt = require('jsonwebtoken');

const login = (req, res) => {

    /* try {
        const userController = await User.();
        return res.json(users);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    } */

    
    if (req.body.login === 'andre@andre' && req.body.password === '123456') {
        const token = jwt.sign({ userId: 1 }, AccessTokenController.getSecret(), { expiresIn: 300 });
        return res.json({ auth: true, token, success:true, url:'http://localhost:3030/users'});
    }
    return res.status(400).json({ error: err.message });
}

/* const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];

    jwt.verify(token, AccessTokenController.getSecret, (err, decode) => {
        if (err) return res.status(401).end();
        req.userId = decode.userId;
        next();
    },
    res.status(401).end()
} */

module.exports = {
    login

}