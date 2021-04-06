'use strict';
// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/sequelize');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      // define association here
      // Movie.hasMany(models.Character,{ foreignKey: 'movieId', sourceKey: 'id'});
      Character.belongsTo(models.Movie, {as: 'pelicula', foreignKey: "movieId"});
    }
  };
  Character.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlphanumeric: true,
        len: {
          args: [3,50],
          msg: 'Must be between 3 and 50 characters long'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt:{
          msg: 'Age must be a integer'
        },
        min:{
          args: 1,
          msg: 'Age must be greater than 1'
        }
      }
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: 'Weight must be a number'
        }
      }
    },
    history: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'history cannot be null'
        },
        notEmpty: {
          msg: 'history cannot be empty'
        }
      }
    },
    movieId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movies',
        key: 'id',
      },
      onDelete: 'CASCADE',
      validate:{
        notNull: {
          args: true,
          msg: 'movieId cannot be null'
        },
        notEmpty: {
          msg: 'movieId cannot be empty'
        },
        isInt:{
          msg: 'movieId must be a integer'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'characters',
    // timestamps: false
  });

  // console.log(Character === sequelize.models.Character); // true
  return Character;
};


// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../database/sequelize');

// class User extends Model{}
// User.init({
//   name: DataTypes.STRING,
//   birthday: DataTypes.DATE
// },{
//   sequelize,
//   modelName: 'user'
// })

// module.exports = User;