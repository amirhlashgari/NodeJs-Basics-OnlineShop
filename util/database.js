const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_tutorial', 'amirhosein', 'amirhosein', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;