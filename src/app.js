'use strict';

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Statics file
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.use('/api', routes)
app.get('/', (req, res) => {
  res.send('Hello world')
})

module.exports = app;