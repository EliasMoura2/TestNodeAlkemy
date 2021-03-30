'use strict';
// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/sequelize');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init({
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
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return User;
};
// module.exports = User;