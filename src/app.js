const express = require('express');
const logger = require('morgan');

// Database
const db = require('./database/database');
// Test db
db.authenticate()
  .then(() => console.log('DB IS CONNECTED'))
  .catch(console.log)

const app = express();


app.use(logger('dev'));


// db.connectionManager();

app.get('/', (req, res) => {
  res.send('Hello world')
})

module.exports = app;