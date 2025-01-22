const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./userModel');
const Product = require('./productModel');

const Order = sequelize.define('Order', {
  total: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false }
});

Order.belongsTo(User, { onDelete: 'CASCADE' });
Order.belongsTo(Product, { onDelete: 'SET NULL' });

module.exports = Order;