module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("person", {
        person_id:{
          type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        surname:{
            type: Sequelize.STRING
        },
        pnr:{
            type: Sequelize.STRING
        },
        role_id:{
            type: Sequelize.INTEGER
        },

    },
        {
            timestamps:false,
            freezeTableName:true
        },
        {

        });
    return User;
};
