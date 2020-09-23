const sequelize = require("../db.context");
const {DataTypes} = require("sequelize");

const Order = sequelize.define("Order", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prefix: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING
    },

    totalPrice: {
        type: DataTypes.DECIMAL
    },
    email: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    note: {
        type: DataTypes.STRING
    },
    payment: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    menuItems: {
        type: DataTypes.JSON
    }
}, {
    // Other model options go here
});

module.exports = Order;