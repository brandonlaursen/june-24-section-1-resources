'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //!!ADD
      // // define association here
      //!!END_ADD
      //!!START SILENT
      // unnecessary:
      Player.belongsTo(models.Team, { foreignKey: 'currentTeamId' });
      Player.belongsToMany(models.Fan, { through: models.DraftPick });
      //!!END
    }
  }
  Player.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isRetired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //!!START SILENT
    currentTeamId: {
      type: DataTypes.INTEGER,
    },
    //!!END
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
