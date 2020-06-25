const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  qty: Sequelize.INTEGER,
});

module.exports = CartItem;
