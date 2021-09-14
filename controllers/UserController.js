const User = require('../models/user');
module.exports = {

    async exist(req, res) {

        const user = await User.findAll({
            where: {
                email: req.params.email,
                password: req.params.password
            }
        })

        if (user.lenght > 0) {
            return res.json({ auth: true, token });
        } else {
            return res.send(404);
        }

    },
    async findAll(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },


    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            await user.update(req.body);
            return res.json({ user });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }


    },
    async destroy(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            await user.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

}