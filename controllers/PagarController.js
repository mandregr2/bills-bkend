const Pagar = require('../models/pagar');
module.exports = {

    
    async findAll(req, res) {
        try {
            const pagar = await Pagar.findAll();
            return res.json(pagar);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    
    async show(req, res) {
        try {
            const pagar = await Pagar.findByPk(req.params.id);
            return res.json(pagar);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const pagar = await Pagar.create(req.body);
            return res.json(pagar);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const pagar = await Pagar.findByPk(req.params.id);
            await pagar.update(req.body);
            return res.json({ pagar });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }


    },
    async destroy(req, res) {
        try {
            const pagar = await Pagar.findByPk(req.params.id);
            await pagar.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

}