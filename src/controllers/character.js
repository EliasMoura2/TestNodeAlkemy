const { Character } = require('../models/index');

module.exports = {
  list: async (req, res) => {
    res.send('list all characters');
  },
  new: async (req, res) => {
    // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    // console.log("Jane's auto-generated ID:", jane.id);
    res.send('new character');
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