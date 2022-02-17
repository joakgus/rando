const db = require("../model");
const config = require("../config/config");
const User = db.user;
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
            if(req.body.password === user.password)
                var passwordIsValid = true;
            else
                var passwordIsValid = true;

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            var token = jwt.sign({ id: user.person_id }, config.secretKey, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                    id: user.person_id,
                    username: user.username,
                    email: user.email,
                    accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
