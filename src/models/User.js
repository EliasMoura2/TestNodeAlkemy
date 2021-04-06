'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: 'username cannot be null'
        },
        notEmpty: {
          msg: 'username cannot be empty'
        },
        len: {
          args: [3,20],
          msg: 'Must be between 3 and 20 characters long'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: 'password cannot be null'
        },
        notEmpty: {
          msg: 'password cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return User;
};
