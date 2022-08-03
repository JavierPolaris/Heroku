/**
 * @author Mihai Bogdan Mardale 😎
 * @author Javier García-Rojo 💀
 * @author Alberto Lara 🤪 
 */





/**
 * Llamamos a la libreria de mysql
 * Requerimos el modelo de la base de datos
 * Usamos sequelize para conectar con la base de datos 
 */
const Usuario = require('../models/Usuario');
const Empresa = require('../models/Empresa');
const Resenas_Valoraciones = require('../models/Resenas_Valoraciones');
const { Op } = require("sequelize");

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Creamos el login de un usuario, en el que hacemos una busqueda 
 * en la base de datos para ver que esta registrado, sino esta registrado no podra entrar
 * y si esta registrado se enviara un enlace al whatsapp para que pueda iniciar sesion
 */


const usuarios = {


  login: async (req, res, next) => {

    try {
      const telefono = req.body.respuesta.telefono;
      const usuarioComprobacion = await Usuario.findOne({
        where: { telefono: telefono },
      });

      if (!usuarioComprobacion) {
        console.log("usuario no registrado")
      } else {
        console.log("mandando whatsapp")
        req.telefono = telefono
        next()

        


      }


    } catch (err) {
      httpError(res, err);
    }
  },


  /**
   * Creamos el registro de un usuario, donde recogemos la informacion que el usuario 
   * introduce en el formulario, si la informacion es correcta se guardara en la base
   * de datos y sino mandara un mensaje de error
   * Si ya estaba registrado, mediante una busqueda en la base de datos, se informara
   * al usuario de que ya estaba registrado y no se podra volver a registrar
   */

  registro: async (req, res) => {
    try {


      const nombre = req.body.respuesta.nombre;
      const apellido = req.body.respuesta.apellidos;
      const telefono = req.body.respuesta.telefono;
      const edad = req.body.respuesta.edad;
      const sexo = req.body.respuesta.genero;
      const nivelInformatica = req.body.respuesta.conocimiento;



      const usuarioComprobacion = await Usuario.findOne({
        where: { telefono: telefono },

      });

      if (!usuarioComprobacion) {

        if (
          nombre.match(/^[a-z ,.'-]+$/i)
          && apellido.match(/^[a-z ,.'-]+$/i)
          && telefono.match(/(6|7)[ -]*([0-9][ -]*){8}/)
          //&& edad.match(1[89]|[2-9][0-9])

        ) {



          const usuario = await Usuario.create({
            nombre: nombre,
            apellidos: apellido,
            telefono: telefono,
            edad: edad,
            sexo: sexo,
            nivelInformatica: nivelInformatica,
          });



          res.json({
            message: "Registro con exito",
          });
          //res.send("Registro con exito");
        } else {
          res.json({
            message: "Datos invalidos",
          });
          //res.send("Datos invalidos");
        }

      } else {
        res.json({
          message: "El usuario existe",
        });
        //res.send("El usuario existe");
      }







    } catch (error) {
      //console.error(error);
      res.send(error);
    }
  },

  /**
   * La dependencia twilio nos permite enviar un whatsapp a un numero de telefono y asi 
   * poder iniciar sesion en la aplicacion
   */

  twilio: async (req, res) => {


  
    client.messages
    .create({
       body: 'https://enigmatic-plateau-00138.herokuapp.com/home',
       from: 'whatsapp:+14155238886',
       to: `whatsapp:+34${req.telefono}`
     })
      .then(message => console.log(message.sid))
      .done();
  },


  /**
   * 
   */ 

  crsEmpresa: async (req, res) => {
    try {

      //peticion get para ver todas las empresas



    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  /**
   * Buscamos en la base de datos todas las empresas, y  mostramos
   * el rating y la descripcion de cada una de las empresas
  **/
  empresasHome: async (req, res) => {
    try {
      const data = await Empresa.findAll({ order: [['rating', 'desc']] });



      res.json(

        data

      )

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  /**
   * 
   */

  buscarCategoria: async (req, res) => {
    try {

      //peticion get para ver imagen de la empresa, ranking



    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
/**
  *
 */
  buscarNombreEmpresa: async (req, res) => {
    try {

      //peticion get para ver imagen de la empresa, ranking



    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  /**
   * Hacemos una busqueda en la tabla de usuarios en la base de datos , 
   * donde mostramos la informacion del usuario mediante el telefono que introduzca
  */
   

  navUser: async (req, res) => {
    try {
      //buscar Usuario por id en mySQL
      const phoneUser = req.body.phone;
      console.log(phoneUser);
      const user = await Usuario.findOne({
        where: {
          telefono: phoneUser,
        },
      });
      console.log(user)
      res.json(user);

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

      
      
  /**
   * Recogemos la valoracion de cada usuario por cada empresa,
   * calculamos la media de dicha valoracion y se la damos a la empresa.
   */ 




  valorar: async (req, res) => {
    try {
      const fk_usuario = req.body.fk_usuario;
      const fk_empresa = req.body.fk_empresa;
      const visual1 = Number(req.body.visual1);
      const visual2 = Number(req.body.visual2);
      const visual3 = Number(req.body.visual3);
      const auditivo1 = Number(req.body.auditivo1);
      const auditivo2 = Number(req.body.auditivo2);
      const auditivo3 = Number(req.body.auditivo3);
      const fisico1 = Number(req.body.fisico1);
      const fisico2 = Number(req.body.fisico2);
      const fisico3 = Number(req.body.fisico3);
      const cognitivo1 = Number(req.body.cognitivo1);
      const cognitivo2 = Number(req.body.cognitivo2);
      const cognitivo3 = Number(req.body.cognitivo3);
      const tecnico1 = Number(req.body.tecnico1);
      const tecnico2 = Number(req.body.tecnico2);
      const tecnico3 = Number(req.body.tecnico3);
      const descripcion = req.body.descripcion;

      const user = await Usuario.findOne({ where: { telefono: fk_usuario } });


      let sum = visual1 + visual2 + visual3 + auditivo1 + auditivo2 + auditivo3 + fisico1 + fisico2 + fisico3 + cognitivo1 + cognitivo2 + cognitivo3 + tecnico1 + tecnico2 + tecnico3
      const rating = sum / 15;
      console.log(sum)

      const valoracion = await Resenas_Valoraciones.create({
        fk_usuario: user.id_usuario,
        fk_empresa: fk_empresa,
        visual1: visual1,
        visual2: visual2,
        visual3: visual3,
        auditivo1: auditivo1,
        auditivo2: auditivo2,
        auditivo3: auditivo3,
        fisico1: fisico1,
        fisico2: fisico2,
        fisico3: fisico3,
        cognitivo1: cognitivo1,
        cognitivo2: cognitivo2,
        cognitivo3: cognitivo3,
        tecnico1: tecnico1,
        tecnico2: tecnico2,
        tecnico3: tecnico3,
        rating: rating,
        descripcion: descripcion,
      });

      const data1 = await Resenas_Valoraciones.findAll({ where: { fk_empresa: fk_empresa } });
      let ratings = []
      for (let i = 0; i < data1.length; i++) {
        ratings.push(Number(data1[i].rating))
      }

      let sum1 = ratings.reduce((previous, current) => current += previous);
      let media = sum1 / ratings.length;
      console.log(media)

      const nuevoRanting = await Empresa.update({ rating: media }, {
        where: { id_empresa: fk_empresa },
      });

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  /**
   * Cuando el usuario introduce el nombre de una empresa registrada en la base de datos,
   * se hace una busqueda en la tabla de empresas, y se muestra la informacion de la empresa
   */

  search: async (req, res) => {
    try {
      //buscar Usuario por id en mySQL
      const search = req.body.empresas;
      let empresas = []
      const empresa = await Empresa.findAll({
        where: { [Op.or]: [
          {nombre_empresa: search},
          {sector: search}
        ]
        },
      });

      if(empresa == "") {

        res.json(null);
      } else {

        res.json(empresa);
      }



    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  /**
   * Cuando el cliente pulsa sobre una de las categorias, se hace una busqueda en la 
   * tabla de empresas y se filtra por la categoria que se ha seleccionado. 
   * Y solo se mostraran las empresas que pertenecen a esa categoria.
   */

  categorias: async (req, res) => {
    try {

      let categoriaM = req.body.categoria;

      let categoria = categoriaM.slice(1, categoriaM.length - 1);


      const categorias = await Empresa.findAll({
        where: { sector: categoria },
      });


      res.json(

        categorias

      )


    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  /**
   * Buscamos por la empresa que el usario a escrito y nos devuelve el rating de dicha empresa
   */ 

  resenaEmpresa: async (req, res) => {
    try {

      const empresa = req.body.empresa

      const resenas = await Resenas_Valoraciones.findAll({
        where: {
          fk_empresa: empresa,
        },
      });


      console.log(resenas)
      // res.json(

      //   resenas
      // )


    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  /**
   * Filtramos por la empresa que el usuario a escrito, igualmente  con las valoraciones 
   * de las reseñas y con el usuario . Mostramos la valoracion de la empresa con dicho usuario 
   */ 
  empresa : async (req, res) => {

    try {

      const empresa = req.body.empresa

      const empresa1 = await Empresa.findOne({
        where: {
          id_empresa: empresa,
        },
      });

      const resenasAll = await Resenas_Valoraciones.findAll({
        where: {
          fk_empresa: empresa,
        },
        order: [['id', 'desc']]

      });
      const resenas = []
      for (let i = 0; i < resenasAll.length; i++) {
        const usuario = await Usuario.findOne({
          where: {
            id_usuario: resenasAll[i].fk_usuario,
          },
        });

        const resemaUsuario = {
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          resena: resenasAll[i].descripcion,
          valoracion: resenasAll[i].rating
        }
        console.log(resemaUsuario)
        resenas.push(resemaUsuario)

      }

      res.json({
        empresa1,
        resenas
      })

    } catch (error) {
      console.error(error);
      res.send(error);
    }

  },
  resenas: async (req, res) => {
    try {
      const empresa = req.body.empresa

      const empresa1 = await Empresa.findOne({
        where: {
          id_empresa: empresa,
        },
      });

      res.json(
        empresa1
    )
    }
    catch (error) {
      console.error(error);
      res.send(error);
    }

  }



}

module.exports = usuarios;