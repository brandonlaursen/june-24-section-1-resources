"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Your code here
      Musician.belongsTo(models.Band, {
        foreignKey: "bandId",
      });

      // come back too
      Musician.belongsToMany(models.Instrument, {
        through: models.MusicianInstrument,
        foreignKey: "musicianId",
        otherKey: "instrumentId",
      });
    }
  }
  Musician.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      bandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Musician",
    }
  );
  return Musician;
};
