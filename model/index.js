const config = require("../config/config");
const Sequelize = require("sequelize");
var sequelize = "";
if(process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
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
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../model/UserModel.js")(sequelize, Sequelize);
module.exports = db;
