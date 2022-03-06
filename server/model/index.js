const Sequelize = require("sequelize");
require('dotenv').config();
var sequelize = "";


if(process.env.DATABASE_URL) {

    sequelize = new Sequelize(process.env.DATABASE_URL + "?sslmode=no-verify");

}
else{
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    );
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../model/UserModel.js")(sequelize, Sequelize);
module.exports = db;
