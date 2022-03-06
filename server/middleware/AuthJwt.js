const jwt = require("jsonwebtoken");
const db = require("../model/index");
const User = db.user;
require('dotenv').config();
verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        if (user.role_id === 1) {
            next();
            return;
        }
        res.status(403).send({
            message: "Require Admin Role!"
        });
        return;
    });
};
const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};
module.exports = authJwt;
