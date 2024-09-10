"use strict";

const { Color } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await Color.bulkCreate([
      { name: "red" },
      { name: "blue" },
      { name: "yellow" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // ([{ name: 'abc123' }, { name: 'name too long' }]);
    await queryInterface.bulkDelete(
      "Colors",
      [{ name: ["red", "blue", "yellow"] }],
    );
  },
};
