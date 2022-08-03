const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Empresa = sequelize.define('Empresas', {
id_empresa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre_empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sector: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  logoCorp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  rating: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});
module.exports = Empresa;
