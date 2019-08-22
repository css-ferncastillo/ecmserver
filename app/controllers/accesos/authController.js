/**
 * Description
 * @authors Fernando Castillo (ferncastillov@outlook.com)
 * @date    2019-06-17 13:57:08
 * @version 1.0.0
 */

/**
  * accesos: db.model(
    "accesos",
    Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      usuario: string
      perfilid: { type: Schema.ObjectId, ref: "perfiles" },
      avatar: String,
      clave: String,
      accesodt: Date
    })
  )
  */
var model = require("../../models/index");
var Db = model.accesos;
var msg = require("../../configs/responses_msg");
var bcrypt = require("bcrypt-nodejs");
var token = require('../../services/userToken');

module.exports = {
  login: (req, res) => {
    var params = req.body;
    var usuario = params.usuario;
    var clave = params.clave;

    let join = [
      { path: "empleadoid", model: "empleados" },
      { path: "perfilid", model: "perfiles" }
    ];

    Db.findOne({ usuario: usuario })
      .populate(join)
      .exec((error, resp) => {
        if (!error) {
          Db.count((countError, counter) => {
            if (counter > 0) {
               bcrypt.compare(clave, resp.clave, (error, confirm) => {
                  if(confirm){
                     // devolver datos del usuario
                     var key = token.createToken(resp);
                     res.status(200).json({
                        titulo: 'Acceso Correcto',
                        tipo: msg.read.success.type,
                        mensaje: 'El usuario se ha autenticado correctamente',
                        data: resp,
                        token: key
                      });
                  }else {
                     res.status(400).json({
                        titulo: 'Acceso Denegado',
                        tipo: msg.read.not_found.type,
                        mensaje: 'Error al intentar acceder al sistema, usuario o _contraseña son incorrecto',
                        data: error
                      });
                  }
               });
            } else {
              res.status(400).json({
                titulo: 'Acceso Denegado',
                tipo: msg.read.not_found.type,
                mensaje: 'Error al intentar acceder al sistema, _usuario o contraseña son incorrecto',
                data: counter
              });
            }
          });
        } else {
         res.status(500).json({
            titulo: msg.read.error.title,
            tipo: msg.read.error.type,
            mensaje: msg.read.error.message,
            data: error
          });
        }
      });
  },

  
};
