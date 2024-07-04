
const Sequelize = require('sequelize');

const sequelize = new Sequelize('projetpoly', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  //port:'3300'
});

module.exports =sequelize;