const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('Chracter', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primarykey: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight:{
    type: DataTypes.FLOAT(2),
    allowNull: false,
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
  timestamps: false
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

//imagen, nombre, edad, peso, historia, y películas o series
// relacionadas (en las que participó).

module.exports = User;