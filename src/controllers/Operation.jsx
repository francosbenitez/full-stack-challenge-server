const db = require('../models/index.jsx');
const Operation = db.operation;
const User = db.user;
const sequelize = require('sequelize');

exports.getOperations = async (req, res) => {
    const operations = await Operation.findAll(); 
    res.json(operations);
};

exports.create = (req, res) => {
    const operation = {
        concept: req.body.concept,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category,
        type: req.body.type,
        user_id: req.body.user_id,
        operation_id: req.body.operation_id
    }

    Operation.create(operation)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            errors: err.errors
        })
    });
};

exports.update = async (req, res) => {
    await Operation.update(req.body, {
        where: { operation_id: req.params.operationId } 
    });
    res.json({ success: "Se ha modificado" })
};

exports.delete = async (req, res) => {
    await Operation.destroy({
        where: { operation_id: req.params.operationId }
    });
    res.json({ success: "Se ha borrado"})
};