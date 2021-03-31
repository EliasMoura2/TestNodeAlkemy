const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Character = require('./Character');

const Movie = sequelize.define('Chracter', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primarykey: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  released: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

Movie.hasMany(Character,{ foreignKey: 'movieId', sourceKey: 'id'});
Character.belongsTo(Movie, { foreignKey: 'movieId', sourceKey: 'id'});


module.exports = Movie;