const config = require("../config/config");
const Sequelize = require("sequelize");
 require('dotenv').config();
var sequelize = "";

console.log("*************************** "+ process.env.DATABASE_URL);
process.env.DATABASE_URL = process.env.DATABASE_URL || 'postgres://qyeadkeowihxbg:7ae7dc8751c5f1ec8085c43b1ac18e56d869f6b98fa8e54fbdb49a4eec200734@ec2-54-164-238-108.compute-1.amazonaws.com:5432/d3cdf4arspejua'
if(process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL + "?sslmode=no-verify");
}
else{
    sequelize = new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        {
            host: config.db.host,
            dialect: config.db.dialect,
            dialectOptions: config.db.dialectOptions,
            operatorsAliases: false,
            pool: {
                max: config.db.pool.max,
                min: config.db.pool.min,
                acquire: config.db.pool.acquire,
                idle: config.db.pool.idle
            }
        }
    );
} 

/*

var Sequelize = require('sequelize');
var sequelize = new Sequelize( config.db.database,
    config.db.username,
    config.db.password, {
        
            host: config.db.host,
            dialect: 'postgres',
            pool: {
                max: 15,
                min: 5,
                idle: 20000,
                evict: 15000,
                acquire: 30000
              },
    }
 
);


// Or you can simply use a connection uri
 var sequelize = new Sequelize('postgres://qyeadkeowihxbg:7ae7dc8751c5f1ec8085c43b1ac18e56d869f6b98fa8e54fbdb49a4eec200734@ec2-54-164-238-108.compute-1.amazonaws.com:5432/d3cdf4arspejua');

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
 */

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../model/UserModel.js")(sequelize, Sequelize);

/* createuser(db.user);

// findOne iss a promise (Async operation)
db.user.findOne().then(function (user) {
    console.log(user.get('username'));
}); */
module.exports = db;

//http/localhost/create/newUser
async function createuser(user,  ){
// Create a new user
    const jane = await user.create({username: "Jane" });
    console.log("Jane's auto-generated ID:", jane.person_id);
}

async function createANewUser(user, data ){
    // Create a new user
        const newUser = await user.create({username: data.username, email: data.email });
        console.log("User's auto-generated ID:", newUser.person_id);
}
