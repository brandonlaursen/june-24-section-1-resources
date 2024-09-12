"use strict";

const { Band, Musician } = require("../models");
const bandMusicians = [
  {
    name: "The Falling Box",
    musicians: [
      { firstName: "Adam", lastName: "Appleby" },
      { firstName: "Anton", lastName: "Martinovic" },
      { firstName: "Wilson", lastName: "Holt" },
    ],
  },
  {
    name: "America The Piano",
    musicians: [
      { firstName: "Marine", lastName: "Sweet" },
      { firstName: "Georgette", lastName: "Kubo" },
    ],
  },
  {
    name: "Loved Autumn",
    musicians: [{ firstName: "Aurora", lastName: "Hase" }],
  },
  {
    name: "Playin Sound",
    musicians: [
      { firstName: "Trenton", lastName: "Lesley" },
      { firstName: "Camila", lastName: "Nenci" },
    ],
  },
  {
    name: "The King River",
    musicians: [
      { firstName: "Rosemarie", lastName: "Affini" },
      { firstName: "Victoria", lastName: "Cremonesi" },
    ],
  },
];

// async function myFunc(){
//   for(let i = 0; i < bandMusicians.length; i++) {
//     let bandMusician = bandMusicians[i];
//     const { name, musicians } = bandMusician;

//     const band = await Band.findOne({ where: { name }});
//     console.log(band);
//   }

// };

// myFunc();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < bandMusicians.length; i++) {
      let bandMusician = bandMusicians[i];
      const { name, musicians } = bandMusician;

      const band = await Band.findOne({ where: { name } });
      // console.log(band);

      for (let j = 0; j < musicians.length; j++) {
        let musician = musicians[j];

        await band.createMusician(musician);
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    for (let i = 0; i < bandMusicians.length; i++) {
      let bandMusician = bandMusicians[i];
      const { name, musicians } = bandMusician;

      for (let j = 0; j < musicians.length; j++) {
        let musician = musicians[j];

        await Musician.destroy({ where: musician });
      }
    }
  },
};
