'use strict';
const {
  Model,
  Validator // validator.js node module
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2],
        isAlpha: true,
        isUppercase: true
      }
    },

    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 4],
        isNumeric: true
      }
    },

    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        isInService(value) {
          // Note that both undefined and null cases for currentNumPassengers
          // must be covered
          if (value === false && this.currentNumPassengers !== undefined && this.currentNumPassengers !== null) {
            throw new Error('Flight must be inService if there are passengers currently on the plane');
          }
        }
      }
    },

    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853,
      }
    },

    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 853,
        isNotGreaterThanMaxNumPassengers(value) {
          if (value > this.maxNumPassengers) {
            throw new Error('Cannot be greater than maxNumPassengers');
          }
        },
        // Alternative solution for 08-currentNumPassengers-inService-spec.js
        // isInService(value) {
        //   if (value !== null && this.inService === false) {
        //     throw new Error('Flight must be inService if there are passengers currently on the plane');
        //   }
        // }
      }
    },

    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: "2022-01-01",
        isAfter: "2019-12-31",
      }
    },
  }, {
    sequelize,
    modelName: 'Airplane',
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['airlineCode', 'flightNumber'],
    //   }
    // ]
    // NOTE: CANNOT DO MODEL-WIDE VALIDATIONS FOR THIS ASSESSMENT
    // Specs will not function as intended if you use model-wide validations
  });
  return Airplane;
};
