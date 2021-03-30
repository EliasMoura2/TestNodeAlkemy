// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/configSQLize');
// const Character = require('./Character');

// const Movie = sequelize.define('Chracter', {
//   // Model attributes are defined here
//   id:{
//     type: DataTypes.INTEGER,
//     primarykey: true
//   },
//   imagePath: {
//     type: DataTypes.STRING,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   released: {
//     type: DataTypes.DATE
//     // allowNull defaults to true
//   },
//   rating:{
//     type: DataTypes.REAL
//   },
//   genre: {
//     type: DataTypes.STRING
//   }
// }, {
//   // Other model options go here
//   timestamps: false
// });

// // `sequelize.define` also returns the model
// // console.log(Movie === sequelize.models.Movie); // true

// Movie.hasMany(Character,{ foreignKey: 'movieId', sourceKey: 'id'});
// Character.belongsTo(Movie, { foreignKey: 'movieId', sourceKey: 'id'});


// module.exports = Movie;