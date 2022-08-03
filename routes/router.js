const express = require('express');
const router = express.Router();



const { login, registro, twilio, crsEmpresa, empresasHome, valorar,navUser,search,categorias, resenaEmpresa, empresa, resenas } = require('../controllers/auth.controller');






router.post('/login', login, twilio);
router.post('/register', registro);
router.post('/navUser', navUser);
router.post('/api/messages', twilio)
router.get('/crsEmpresa', crsEmpresa); //para ver las categorias de las empresas
router.get('/empresasHome', empresasHome); //foto, posicion del ranking, titulo, sector
//router.post('/buscarCategoria', buscarCategoria);
//router.post('/buscarNombreEmpresa', buscarNombreEmpresa);
router.post('/valorar', valorar);
router.post('/empresa', empresa);
router.post("/search",search);
router.post("/resenas",resenas);


router.post('/categorias', categorias);
router.post('/resenaEmpresa', resenaEmpresa);





module.exports = router;
