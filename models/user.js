
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const book = require('../models/booking')
const Unown = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }, 
  
});


Unown.sync();

module.exports = Unown;
