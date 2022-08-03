const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Usuario = sequelize.define('Usuarios', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellidos: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  edad: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  sexo: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  nivelInformatica: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  
});
module.exports = Usuario;
