const Movie = require('../models/Movie');

module.exports = {
  list: async (req, res) => {
    res.send('list all movies');
  },
  new: async (req, res) => {
    res.send('new movie')
  },
  edit: async (req, res) => {
    res.send('edit a movie')
  },
  delete: async (req, res) => {
    res.send('delete a movie')
  },
  detail: async (req, res) => {
    res.send('movie details')
  },
  search: async (req, res) => {
    res.send('search a movie')
  }
}