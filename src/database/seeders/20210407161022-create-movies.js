'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
    /**
     * Add seed commands here.
    */
    let movies = [
      {id: 1, image: '/img/movies/30cb270c-98fd-4afe-9539-193b3421936a.jpg', title: 'Alice in Wonderland', released: '1951/07/28', rating: 4, genre:'Fantasía/Infantil'},
      {id: 2, image: '/img/movies/e08fd2c2-06fc-4a70-a378-285fc0123822.png', title: 'Alice in Wonderland', released: '2010/03/04', rating: 3, genre:'Fantasía/Aventura'},
    ]
    await queryInterface.bulkInsert('movies', movies, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
