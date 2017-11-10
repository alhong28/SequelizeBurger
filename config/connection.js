// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_burgers", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export connection for our ORM to use.
module.exports = connection;