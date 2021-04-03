'use strict';
// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    static associate(models) {
      // define association here
      Movie.hasMany(models.Character, {as: 'personaje', foreignKey: "movieId"})
    }
  };
  Movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    // timestamps: false
  });

  // console.log(Movie === sequelize.models.Movie); // true
  return Movie;
};