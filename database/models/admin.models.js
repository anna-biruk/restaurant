const sequelize = require("../db.context");
const {DataTypes} = require("sequelize");

const Admin = sequelize.define("Admin", {
    login: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});

module.exports = Admin;