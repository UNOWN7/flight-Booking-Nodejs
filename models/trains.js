
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const train = sequelize.define('trains', {
  Train_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  Train_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_station: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arrival_station: {
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
});

train.sync();

module.exports = train;
