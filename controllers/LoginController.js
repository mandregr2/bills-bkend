const userController = require('../controllers/UserController');
const AccessTokenController = require('./AccessTokenController');
const db = require("../database/db");

const login = (req, res) => {

    /* try {
        const userController = await User.();
        return res.json(users);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    } */


    if (req.body.user === 'andre@andre' && req.body.password === '12345') {
        //        const token = jwt.sign({ userId: 1 }, AccessToken.getToken(), { expiresIn: 300 });
        return res.json({ auth: true, token });
    }
    return res.status(401).end();
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