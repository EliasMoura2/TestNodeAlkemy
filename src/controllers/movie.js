// const { Movie } = require('../models/index');
const { Movie, Character } = require('../models/index')
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

        // const newMovie = 
        await Movie.create(movie.dataValues);
        // console.log(newMovie);
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
      // try {
      //   let movie = await Movie.findAll();
      //   // console.log(movie)
      //   res.json(movie)
      // } catch (error) {
      //   console.log(error.message);
      //   res.status(500).json({message: 'Something goes wrong'});
      // }
      // description: {
      //   [Op.like]: '%boat%'
      // }
  }
}