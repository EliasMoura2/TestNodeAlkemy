const { Character, Movie } = require('../models/index');
const { Op } = require("sequelize");
const { unlink } = require('fs-extra');
const path = require('path');

module.exports = {
  list: async (req, res) => {
    try {
      let characters = await Character.findAll({
        attributes: ['image', 'name']
      });
      res.status(200).json(characters)
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

      await Character.create(character.dataValues);
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
    try {
      const { id } = req.params
      let character = await Character.findOne({
        where: {
          id
        }
      })

      let isDeleted = await Character.destroy({
        where: {
          id
        }
      })
      if(isDeleted){
        unlink(path.resolve('./src/public' + character.image))
        res.status(200).json({message: 'Character deleted successfully'});
      }else{
        res.status(400).json({message: 'incorrect id'});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params
      let character = await Character.findOne({
        where: {
          id
        },
        include: {
          model: Movie,
          as: 'pelicula',
          attributes: ['id','image','title','released', 'rating','genre']
        }
      });
      res.status(200).json(character);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'});
    }
  },
  search: async (req, res) => {
    try {
      let { name } = req.params;
      let { age, weight, movie } = req.query;

      if(age){
        let characters = await Character.findAll({
          include: {
            model: Movie,
            as: 'pelicula',
            attributes: ['id','image','title','released', 'rating','genre']
          },
          where:{
            name: {
              [Op.like]: `%${name}%`
            },
            age: {
              [Op.eq]: age
            }
          }
        });
        res.status(200).json(characters);
      }

      if(movie){
        let characters = await Character.findAll({
          include: {
            model: Movie,
            as: 'pelicula',
            attributes: ['id','image','title','released', 'rating','genre']
          },
          where:{
            name: {
              [Op.like]: `%${name}%`
            }
          }
        });
        let newCharacters = characters.filter( character => character.dataValues.pelicula.dataValues.title === movie);
        res.status(200).json(newCharacters)
      }

      if(weight){
        let characters = await Character.findAll({
          include: {
            model: Movie,
            as: 'pelicula',
            attributes: ['id','image','title','released', 'rating','genre']
          },
          where:{
            name: {
              [Op.like]: `%${name}%`
            },
            weight: {
              [Op.eq]: weight
            }
          }
        });
        res.status(200).json(characters);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'});
    }
  }
}