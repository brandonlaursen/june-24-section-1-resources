//database.js
module.exports = {
  development: {
    storage: process.env.DB_FILE, // location of DB file
    dialect: "sqlite", // specify RDBMS
    seederStorage: "sequelize",
    benchmark: true, // prints execution time to terminal
    logQueryParameters: true, // logs SQL query parameters to the terminal
    typeValidation: true, // model-level data type validation
    // logging: false // prints SQL to terminal unless set to false
  },
};
