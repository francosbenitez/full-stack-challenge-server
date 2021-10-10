const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const db = require('../models/index.jsx');
const User = db.user;
const { validationResult } = require("express-validator");
const moment = require("moment");

exports.signUp = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

}

exports.signIn = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if (equals) {
            res.json({ success: createToken(user) })
        } else {
            res.json({ error: "Error en usuario y/o contraseña" });
        }
    } else {
        res.json({ error: "Error en usuario y/o contraseña" });
    }
};

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(3, "hours").unix()
    }
    return jwt.encode(payload, "frase secreta")
}