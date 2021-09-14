const Receber = require('../models/receber');
module.exports = {

    async findAll(req, res) {
        try {
            const recebers = await Receber.findAll();
            return res.json(recebers);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const receber = await Receber.findByPk(req.params.id);
            return res.json(receber);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const receber = await Receber.create(req.body);
            return res.json(receber);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const receber = await Receber.findByPk(req.params.id);
            await receber.update(req.body);
            return res.json({ receber });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }


    },
    async destroy(req, res) {
        try {
            const receber = await Receber.findByPk(req.params.id);
            await receber.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

}