
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const book = sequelize.define('bookings', {
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  flight_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  train_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  seat_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  booking_date: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


book.sync();

module.exports = book;
