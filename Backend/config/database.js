
const Sequelize = require('sequelize');
//projetfinal
const sequelize = new Sequelize('test3', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  //port:'3300'
});

module.exports =sequelize;