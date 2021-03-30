const Character = require('../models/Character');

module.exports = {
  list: async (req, res) => {
    res.send('list all characters');
  },
  new: async (req, res) => {
    res.send('new character')
  },
  edit: async (req, res) => {
    res.send('edit a character')
  },
  delete: async (req, res) => {
    res.send('delete a character')
  },
  detail: async (req, res) => {
    res.send('character details')
  },
  search: async (req, res) => {
    res.send('search a character')
  }
}