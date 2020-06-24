const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_shop", "root", "Gdfhy95.", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
