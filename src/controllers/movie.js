const { Movie } = require('../models/index');

module.exports = {
  list: async (req, res) => {
    let movies = await Movie.findAll({})
    // Model.findAll({
    //   attributes: ['foo', 'bar']
    // });
    // res.send('list all movies');
    res.status(200).json({message: 'All movies', movies})
  },
  new: async (req, res) => {
    try {
      const { image, title, released, rating, genre } = req.body;
      // await Movie.create({ image, title, released, rating, genre });
      res.status(203).json({message: 'Movie created successfully'});
    } catch (error) {
      console.log(error.message)
    }
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