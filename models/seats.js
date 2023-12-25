
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const   seats = sequelize.define('flight_seats', {
  seat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  Flight_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_No: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});


seats.sync();

module.exports = seats;
