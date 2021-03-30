const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  'test-node',
  'postgres',
  '',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);

// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }