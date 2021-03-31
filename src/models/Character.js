'use strict';
// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/sequelize');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      // define association here
      // Movie.hasMany(models.Character,{ foreignKey: 'movieId', sourceKey: 'id'});
      // Character.hasOne(models.Movie);
    }
  };
  Character.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    history: {
      type: DataTypes.TEXT,
      allowNull: false,
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