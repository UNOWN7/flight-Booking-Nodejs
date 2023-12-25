
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const flight = sequelize.define('flights', {
  flight_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  airline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  arrival_time: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  
    stops: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


flight.sync();

module.exports = flight;
