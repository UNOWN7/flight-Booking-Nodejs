
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'booking_system',
  username: 'root',
  password: 'root',
  host: 'localhost',
  dialect: 'mysql',
});



module.exports = sequelize;
