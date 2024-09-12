'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
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
      Team.belongsTo(models.Sport, { foreignKey: 'sportId' });
      Team.hasMany(models.Player, { foreignKey: 'currentTeamId', as: 'TeamRoster' });
      // BONUS associations:
      // Team.hasMany(models.Match, {
      //   as: 'HomeMatches',
      //   foreignKey: 'homeTeamId',
      // });
      // Team.hasMany(models.Match, {
      //   as: 'AwayMatches',
      //   foreignKey: 'awayTeamId',
      // });
      // Team.belongsToMany(models.Team, {
      //   through: models.Match,
      //   as: 'AwayMatchOpponents',
      //   foreignKey: 'homeTeamId',
      //   otherKey: 'awayTeamId',
      // });
      // Team.belongsToMany(models.Team, {
      //   through: models.Match,
      //   as: 'HomeMatchOpponents',
      //   foreignKey: 'awayTeamId',
      //   otherKey: 'homeTeamId',
      // });
      //!!END
    }
  }
  Team.init({
    name: {
      type: DataTypes.STRING,
    },
    homeCity: {
      type: DataTypes.STRING,
    },
    //!!START SILENT
    sportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //!!END
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
