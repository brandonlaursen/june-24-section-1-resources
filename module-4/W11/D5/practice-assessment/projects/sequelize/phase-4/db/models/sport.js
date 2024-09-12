'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
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
      Sport.hasMany(models.Team, { foreignKey: 'sportId' });
      //!!END
    }
  }
  Sport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Sport',
  });
  return Sport;
};