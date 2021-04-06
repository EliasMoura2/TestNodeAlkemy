'use strict';
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
      defaultValue: 'not image'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlphanumeric: true,
        notNull: {
          args: true,
          msg: 'title cannot be null'
        },
        notEmpty: {
          msg: 'title cannot be empty'
        },
        len: {
          args: [3,50],
          msg: 'Must be between 3 and 50 characters long'
        }
      }
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        isDate: true
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt:{
          msg: 'rating must be a integer'
        },
        min:{
          args: 1,
          msg: 'rating must be >= 1'
        },
        max:{ 
          args: 5,
          msg: 'rating must be <= 5'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'genre cannot be null'
        },
        notEmpty: {
          msg: 'genre cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });

  return Movie;
};