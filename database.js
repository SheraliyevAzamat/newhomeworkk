const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

sequelize.sync({ force: false })
  .then(() => console.log('connected successfully'))
  .catch((err) => console.log(' connection failed:', err));

module.exports = sequelize;