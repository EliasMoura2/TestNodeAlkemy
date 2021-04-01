const { Character } = require('../models/index');

module.exports = {
  list: async (req, res) => {
    try {
      let characters = await Character.findAll({
        attributes: ['image', 'name']
      });
      res.status(200).json({characters})
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  },
  new: async (req, res) => {
    try {
      const { name, age, weight, history, movieId } = req.body;
      let character = new Character();
      character.image = '/img/characters/' + req.file.filename;
      character.name = name;
      character.age = age;
      character.weight = weight;
      character.history = history;
      character.movieId = movieId;

      // const newCharacter = 
      await Character.create(character.dataValues);
      // console.log(newMovie);
      res.status(201).json({message: 'Character created successfully'});
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  },
  edit: async (req, res) => {
    try {
      const { name, age, weight, history, movieId } = req.body;
      const { id } = req.params
      let image = '/img/characters/' + req.file.filename;

      let character = await Character.findOne({
        where: {
          id
        }
      });

      let isUpdate = await Character.update({
        image,
        name,
        age,
        weight,
        history,
        movieId
      }, 
      {
        where: {
          id
        }
      });
      if(isUpdate){
        unlink(path.resolve('./src/public' + character.image))
        res.status(200).json({message: 'Character update successfully'});
      }else{
        res.status(500).json({message: 'incorrect id'});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
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