const User = require('../models/User');

module.exports = {
  login: async (req, res) => {
    res.send('login');
  },
  signup: async (req, res) => {
    // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    // console.log("Jane's auto-generated ID:", jane.id);
    res.send('signup')
  }
}