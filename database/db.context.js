const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://kkwhxpuxnzcotl:ca89969bd9578b17d9bb0dc432fe450c5cf7d93e4b522e14b5d6e5b405350fb3@ec2-3-214-46-194.compute-1.amazonaws.com:5432/dasi0d1fbtjm9', {
    dialect: 'postgres', ssl: true, dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
