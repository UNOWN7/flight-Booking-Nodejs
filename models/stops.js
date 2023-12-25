
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const stop = sequelize.define('stops', {
  stop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  Flight_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arrival_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});


stop.sync();

module.exports = stop;
