// const { Movie } = require('../models/index');
const { Movie, Character } = require('../models/index');
const { Op } = require("sequelize");
const { unlink } = require('fs-extra');
const path = require('path');

module.exports = {
  list: async (req, res) => {
    try {
      let movies = await Movie.findAll({
        attributes: ['image', 'title', 'released']
      });
      res.status(200).json(movies)
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'})
    }
  },
  new: async (req, res) => {
      try {
        const { title, released, rating, genre } = req.body;
        let movie = new Movie();
        movie.image = '/img/movies/' + req.file.filename;
        movie.title = title;
        movie.released = released;
        movie.rating = rating;
        movie.genre = genre;

        await Movie.create(movie.dataValues);
        res.status(201).json({message: 'Movie created successfully'});
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: 'Something goes wrong'})
      }
  },
  edit: async (req, res) => {
      try {
        const { title, released, rating, genre } = req.body;
        const { id } = req.params
        let image = '/img/movies/' + req.file.filename;

        let movie = await Movie.findOne({
          where: {
            id
          }
        });

        let isUpdate = await Movie.update({
          image,
          title,
          released,
          rating,
          genre
        }, 
        {
          where: {
            id
          }
        });
        if(isUpdate){
          unlink(path.resolve('./src/public' + movie.image))
          res.status(200).json({message: 'Movie update successfully'});
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
        let movie = await Movie.findOne({
          where: {
            id
          }
        })

        let isDeleted = await Movie.destroy({
          where: {
            id
          }
        })
        if(isDeleted){
          unlink(path.resolve('./src/public' + movie.image))
          res.status(200).json({message: 'Movie deleted successfully'});
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
        let movie = await Movie.findOne({
          where: {
            id
          },
          include: {
            model: Character,
            as: 'personaje'
          }
        });
        res.status(200).json(movie);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: 'Something goes wrong'});
      }
  },
  search: async (req, res) => {
    try {
      let { title } = req.params;
      let { genre, sort } = req.query;
      sort = sort.toUpperCase();
      if(genre){
        if(sort === 'ASC' || sort === 'DESC'){
          let movies = await Movie.findAll({
            include: {
              model: Character,
              as: 'personaje',
              attributes: ['id','name','image']
            },
            where:{
              title: {
                [Op.like]: `%${title}%`
              },
              genre: {
                [Op.like]: `%${genre}%`
              }
            },
            order: [
              ['released', `${sort}`],
            ]
          });
          res.status(200).json(movies);
        } else {
          let movies = await Movie.findAll({
            include: {
              model: Character,
              as: 'personaje',
              attributes: ['id','name','image']
            },
            where:{
              title: {
                [Op.like]: `%${title}%`
              },
              genre: {
                [Op.like]: `%${genre}%`
              }
            }
          });
          res.status(200).json(movies);
        }
      } else{
        if(sort === 'ASC' || sort === 'DESC'){
          let movies = await Movie.findAll({
            include: {
              model: Character,
              as: 'personaje',
              attributes: ['id','name','image']
            },
            where:{
              title: {
                [Op.like]: `%${title}%`
              }
            },
            order: [
              ['released', `${sort}`],
            ]
          });
          res.status(200).json(movies);
        } else {
          let movies = await Movie.findAll({
            include: {
              model: Character,
              as: 'personaje',
              attributes: ['id','name','image']
            },
            where:{
              title: {
                [Op.like]: `%${title}%`
              }
            }
          });
          res.status(200).json(movies);
        }
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: 'Something goes wrong'});
    }
  }
}