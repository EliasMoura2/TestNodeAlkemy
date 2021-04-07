require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'postgres',
  define: {
    timestamps: false
  },
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,

  // config seeds
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // config migrations
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations'
}
