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
var fs = require("fs");
var path = require("path");
var base = fs.realpathSync(process.cwd() + "/../");

module.exports = {
  create: (req, res) => {
    let data = req.body;
    let clave = "123456789";
    let acceso = new Db({
      empleadoid: data.empleadoid,
      usuario: data.usuario,
      perfilid: data.perfilid,
      avatar: data.avatar,
      clave: clave,
      accesodt: data.accesodt
    });
    bcrypt.hash(clave, null, null, (c_error, c_result) => {
      if (!c_error) {
        acceso.clave = c_result;
        acceso.save((error, resp) => {
          if (!error) {
            Db.count((counterError, counter) => {
              if (counter > 0) {
                res.status(200).json({
                  titulo: msg.create.success.title,
                  tipo: msg.create.success.type,
                  mensaje: msg.create.success.message,
                  data: resp
                });
              } else {
                res.status(400).json({
                  titulo: msg.create.not_found.title,
                  tipo: msg.create.not_found.type,
                  mensaje: msg.create.not_found.message,
                  data: resp
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
      } else {
        res.status(500).json({
          titulo: msg.read.error.title,
          tipo: msg.read.error.type,
          mensaje: msg.read.error.message,
          data: c_error
        });
      }
    });
  },
  read: (req, res) => {
    let join = [
      { path: "empleadoid", model: "empleados" },
      { path: "perfilid", model: "perfiles" }
    ];
    Db.find()
      .populate(join)
      .exec((error, resp) => {
        if (!error) {
          Db.count((counterError, counter) => {
            if (counter > 0) {
              res.status(200).json({
                titulo: msg.read.success.title,
                tipo: msg.read.success.type,
                mensaje: msg.read.success.message,
                data: resp
              });
            } else {
              res.status(400).json({
                titulo: msg.read.not_found.title,
                tipo: msg.read.not_found.type,
                mensaje: msg.read.not_found.message,
                data: resp
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
  filter: (req, res) => {
    let params = req.body;
    let join = [
      { path: "empleadoid", model: "empleados" },
      { path: "perfilid", model: "perfiles" }
    ];
    Db.find(params)
      .populate(join)
      .exec((error, resp) => {
        if (!error) {
          Db.count((counterError, counter) => {
            if (counter > 0) {
              res.status(200).json({
                titulo: msg.filter.success.title,
                tipo: msg.filter.success.type,
                mensaje: msg.filter.success.message,
                data: resp
              });
            } else {
              res.status(400).json({
                titulo: msg.filter.not_found.title,
                tipo: msg.filter.not_found.type,
                mensaje: msg.filter.not_found.message,
                data: resp
              });
            }
          });
        } else {
          res.status(500).json({
            titulo: msg.filter.error.title,
            tipo: msg.filter.error.type,
            mensaje: msg.filter.error.message,
            data: error
          });
        }
      });
  },
  update: (req, res) => {
    let id = req.params;
    let data = req.body;
    Db.findOneAndUpdate(id, data, (error, resp) => {
      if (!error) {
        Db.count((counterError, counter) => {
          if (counter > 0) {
            res.status(200).json({
              titulo: msg.update.success.title,
              tipo: msg.update.success.type,
              mensaje: msg.update.success.message,
              data: resp
            });
          } else {
            res.status(400).json({
              titulo: msg.update.not_found.title,
              tipo: msg.update.not_found.type,
              mensaje: msg.update.not_found.message,
              data: resp
            });
          }
        });
      } else {
        res.status(500).json({
          titulo: msg.update.error.title,
          tipo: msg.update.error.type,
          mensaje: msg.update.error.message,
          data: error
        });
      }
    });
  },
  delete: (req, res) => {
    let id = req.params;
    Db.findByIdAndRemove(id, (error, resp) => {
      if (!error) {
        Db.count((counterError, counter) => {
          if (counter > 0) {
            res.status(200).json({
              titulo: msg.delete.success.title,
              tipo: msg.delete.success.type,
              mensaje: msg.delete.success.message,
              data: resp
            });
          } else {
            res.status(400).json({
              titulo: msg.delete.not_found.title,
              tipo: msg.delete.not_found.type,
              mensaje: msg.delete.not_found.message,
              data: resp
            });
          }
        });
      } else {
        res.status(500).json({
          titulo: msg.delete.error.title,
          tipo: msg.delete.error.type,
          mensaje: msg.delete.error.message,
          data: error
        });
      }
    });
  },
  login: (req, res) => {
    let usr = req.body.usuario;
    let pdw = req.body.clave;
    let join = [
      { path: "empleadoid", model: "empleados" },
      { path: "perfilid", model: "perfiles" }
    ];

    Db.findOne({ usuario: usr })
      .populate(join)
      .exec((error, result) => {
        if (error) {
          res.status(500).json({
            titulo: "Error en la Petición!",
            tipo: "danger",
            mensaje: "Se ha producido un error al intentar procesar los datos",
            data: error
          });
        } else {
          if (!result) {
            res.status(404).json({
              titulo: "Acceso Denegado!",
              tipo: "warning",
              mensaje:
                "Usuario o contraseña incorrecta, ingrese nuevamente sus datos",
              data: null
            });
          } else {
            bcrypt.compare(pdw, result.clave, (err, check) => {
              if (check) {
                //devolver los datos del usuario logeado
                res.status(500).json({
                  titulo: "Acceso Correcto!",
                  tipo: "success",
                  mensaje: "El usuario ha accedido correctamente",
                  data: result,
                  token: null
                });
              } else {
                // error de contraseñas
                res.status(500).json({
                  titulo: "Acceso Denegado!",
                  tipo: "warning",
                  mensaje:
                    "Usuario o Contraseña incorrecta, ingrese nuevamente sus datos",
                  data: err
                });
              }
            });
          }
        }
      });
  },

  uploadAvatar(req, res) {
    var userid = req.params._id;
    var filename = "no subido...";

    if (Object.keys(req.files).length == 0) {
      return res.status(400).send("No files were uploaded.");
    }

    var imagen = req.files.sampleFile;
    var ext_split = imagen.name.split(".");
    var ext = ext_split[ext_split.length - 1];

    if (ext == "png" || ext == "jpg" || ext == "gif") {
      var imgname = imagen.md5 + "." + ext;
      var uploadPath = base + "/server/app/system/images/avatar/" + imgname;
      imagen.mv(uploadPath, error => {
        if (error) {
          res.status(500).json({
            titulo: "Carga Fallida",
            tipo: "warning",
            mensaje: "Error al intentar subir la imagen",
            data: error
          });
        } else {
          let id = req.params;
          let data = {
            avatar: imgname
          };
          Db.findOneAndUpdate(id, data, (error, resp) => {
            if (!error) {
              Db.count((counterError, counter) => {
                if (counter > 0) {
                  res.status(200).json({
                    titulo: msg.update.success.title,
                    tipo: msg.update.success.type,
                    mensaje: msg.update.success.message,
                    data: resp
                  });
                } else {
                  res.status(400).json({
                    titulo: msg.update.not_found.title,
                    tipo: msg.update.not_found.type,
                    mensaje: msg.update.not_found.message,
                    data: resp
                  });
                }
              });
            } else {
              res.status(500).json({
                titulo: msg.update.error.title,
                tipo: msg.update.error.type,
                mensaje: msg.update.error.message,
                data: error
              });
            }
          });
        }
      });
    }
  },

  loadImagen(req, res) {
    var avatar_path = base + "/server/app/system/images/avatar/";
    var data = fs.readdirSync(avatar_path);
    var Dbs = model.avatar;
    for (let index = 0; index < data.length; index++) {
      var avatar = new Dbs({
        avatar: data[index]
      });
      
      avatar.save((error, resp) => {
        if (!error) {
          console.log("imagen " + data[index] + " cargada" );
        } else {
          res.status(500).json({
            titulo: msg.read.error.title,
            tipo: msg.read.error.type,
            mensaje: msg.read.error.message,
            data: error
          });
        }
      });
      
    }
  /*  */
  }
};
