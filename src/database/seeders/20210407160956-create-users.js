'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
    let users = [
      {username: 'alkemy', password: '$2a$10$4/ta9H/kafEjpvbfoxkdduF/Vk3sH.8kS0.BMa3hLJzAQcUShLvFu', email: 'challenge@alkemy.org'},
      {username: 'test', password: '$2a$10$NQyz/RE2YlzHJazsN0xUd.U67HfyRw.IFspONomoV1YGunlF1D3WO', email: 'test@gmail.com'}
    ]
    await queryInterface.bulkInsert('users',users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
