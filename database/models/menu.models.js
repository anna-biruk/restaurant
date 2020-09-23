const sequelize = require("../db.context");
const {DataTypes} = require("sequelize");

const Menu = sequelize.define("Menu", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL
        // allowNull defaults to true
    },
    url: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});

module.exports = Menu;