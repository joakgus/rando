const express = require('express')
const db = require("../model");
const config = require("../config/config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user } = require('../model');
const { urlencoded } = require('express');


const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  //console.log('Time: ', Date.now())
  next()
})


// define the home page route
router.get('/createUser', (req, res) => {
  res.send('Create user');
})

// define the about route
router.get('/signin', (req, res) => {

  res.send('signin')
})

module.exports = {
    signin: signin,
    signUp: signup,
};

async function signup(req, res, next){

    let data =  req.body;
    console.log('Got body:', data);

    //Password encryption
    const hash = bcrypt.hashSync(data.password, 5);
    console.log(hash);

    //Mapping form values to the database columns
    const userData = {surname: data.lastname , email: data.email, password: hash, name: data.firstname, pnr:data.personalNumber };
    await createANewUser(user, userData)
    next();


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



async function createANewUser(user, data ){
    // Create a new user
        const newUser = await user.create(data);
        console.log("User's auto-generated ID:", newUser.person_id);
}