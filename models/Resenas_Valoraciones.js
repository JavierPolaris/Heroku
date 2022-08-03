const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Resenas_Valoraciones = sequelize.define('Resenas_Valoraciones', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  visual1: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  visual2: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  visual3: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  auditivo1: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  auditivo2: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  auditivo3: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  fisico1: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  fisico2: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  fisico3: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  cognitivo1: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  cognitivo2: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  cognitivo3: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  tecnico1: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  tecnico2: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  tecnico3: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  rating: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  
});
module.exports = Resenas_Valoraciones;
