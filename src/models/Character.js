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
    },
    movieId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id',
      },
      onDelete: 'CASCADE'
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