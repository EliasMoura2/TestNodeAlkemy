const express = require('express');
const auth = require('./auth');

const routes = express.Router();

routes.use('/', auth);
// routes.use('/movies');
// routes.use('/character');

module.exports = routes;