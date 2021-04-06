const { User } = require('../models/index');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if(username){
        const user = await User.findOne({ 
          where:{
            [Op.or]: [
              { username: username},
              { email: username}
            ]
          }
        })

        if(!user){
          console.log('Invalid data');
          return res.status(400).json({
            error: true,
            message: 'Invalid data'
          })
        } else {
          const validPassword = await bcrypt.compare( password, user.password)

          if(!validPassword){
            return res.status(400).json({ message: 'Invalid data' })
          }else{

            const token = jwt.sign(
              {
                username: user.username,
                email: user.email,
                id: user.id
              }, process.env.TOKEN_SECRET || 'This is a secret',{
                expiresIn: 60 * 60 * 1 
              });

              res.status(200).json({ token: token });
          }
        }
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  },
  signup: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      
      if(username && email){
        const user = await User.findOne({ 
          where:{
            [Op.or]: [
              { username: username},
              { email: email}
            ]
          }
        })
        if(user){
          console.log('Username or email registered');
          return res.status(400).json({
            message: 'Username or email registered'
          })
        }
      }
      
      let passHashed = bcrypt.hashSync(password, 10);
    
      let user = new User();
      user.username = username;
      user.password = passHashed;
      user.email = email;

      await User.create(user.dataValues);
      res.status(201).json({message: 'User created successfully'});
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  }
}