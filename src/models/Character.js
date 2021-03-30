const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('Chracter', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primarykey: true
  },
  imagePath: {
    type: DataTypes.STRING,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  weight:{
    type: DataTypes.REAL
  },
  history: {
    type: DataTypes.TEXT
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