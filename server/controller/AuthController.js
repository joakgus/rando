
const express = require('express')
const config = require("../config/config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user } = require('../model');
const { urlencoded } = require('express');
const db = require("../model");
const User = db.user;
require('dotenv').config();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



module.exports = {
    signin: signin,
    signUp: signup,
    encryptedPass: encryptedPass
};

async function signup(req, res, next){

    let data =  req.body;
    console.log('Got body:', data);

    //Password encryption
    const hash = bcrypt.hashSync(data.password, 5);
    console.log(hash);

    //Mapping form values to the database columns
    const userData = {surname:data.lastName , username: data.username, email: data.email, password: hash, name: data.firstname, pnr:data.personalNumber,role_id:2 };
    let newUser =    await createANewUser(User, userData);
    res.send(newUser);

}


function signin(req, res){
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
            var token = jwt.sign({ id: user.person_id }, process.env.SECRET_KEY || "jwor9334bg5", {
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


}



async function createANewUser(user, data ){
    // Create a new user    
    console.log(data) ;
    const newUser = await user.create(data);
    console.log("User's auto-generated ID:", newUser.person_id);
    return newUser;
}

// We are assuming that the password is not encrypted,
// we are retrieving the userId parameter to get user password and encrypt it
async function encryptedPass(req, res, next){
    let person_id = req.params.userId;
    let user = await User.findOne({
        where: {
            person_id: person_id
        }

    });

    let unencryptedPass = user.password;
    const encryptedPass = bcrypt.hashSync(unencryptedPass);
// userId that
    user = await user.update({password: encryptedPass});
    console.log('User new pass: ' +  user.password);
    next();
}
