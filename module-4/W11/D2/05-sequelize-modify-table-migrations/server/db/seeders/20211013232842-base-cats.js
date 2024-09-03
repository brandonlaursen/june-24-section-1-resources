'use strict';
const { Cat } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    try {
      await Cat.bulkCreate([
        { name: 'Jasper', weight: 12 },
        { name: 'Marcy', weight: 16 },
        { name: 'Princess', weight: 8 },
      ], { validate: true });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cats', {
      name: ['Jasper', 'Marcy', 'Princess']
    })
  }
};
