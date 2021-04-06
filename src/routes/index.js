const express = require('express');
const auth = require('./auth');
const characters = require('./characters');
const movies = require('./movies');

const routes = express.Router();

routes.use('/', auth);
routes.use('/movies', movies);
routes.use('/characters', characters);

module.exports = routes;