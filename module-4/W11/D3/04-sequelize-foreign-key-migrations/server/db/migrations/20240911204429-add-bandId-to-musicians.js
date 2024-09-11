"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn("Musicians", "bandId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "Bands" },
      onDelete: "CASCADE",
    });
  },
  // Musician - bandId ->  Band -> id

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn("Musicians", "bandId");
  },
};
