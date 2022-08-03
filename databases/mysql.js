const mysql = require('mysql');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.BD_USER, process.env.DB_PW, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  define: {
    timestamps: false
},
logging: false
});
sequelize
  .authenticate()
  .then(() => {

    console.log('MySQL: Conexion establecida');
  })
  .catch((err) => {
    console.log(`MySQL: Error en la conexion`);
    
  });
module.exports = sequelize;
