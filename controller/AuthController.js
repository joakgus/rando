const db = require("../model");
const User = db.user;
require('dotenv').config();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            var token = jwt.sign({ id: user.person_id }, process.env.SECRET_KEY, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                    id: user.person_id,
                    username: user.username,
                    email: user.email,
                    role: user.role_id,
                    accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
