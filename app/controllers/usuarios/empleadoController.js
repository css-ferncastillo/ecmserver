/**
 * Description
 * @authors Fernando Castillo (ferncastillov@outlook.com)
 * @date    2019-06-17 13:57:08
 * @version 1.0.0
 */

/**
  *  empleado: db.model(
    "empleados",
    Schema({
      nombre: String,
      apellido: String,
      genero: { type: Schema.ObjectId, ref: "generos" },
      estado_civil: { type: Schema.ObjectId, ref: "estados_civiles" },
      cedula: { type: String, unique: true },
      nacimientodt: Date,
      estado: { type: Schema.ObjectId, ref: "estados" }
    })
  ),
  */

var model = require("../../models/index");
var Db = model.empleado;
var msg = require("../../configs/responses_msg");
var paginate = require("mongoose-pagination");

module.exports = {
    create: (req, res) => {
        let data = req.body;
        let empleado = new Db({
            nombre: data.nombre,
            apellido: data.apellido,
            genero: data.genero,
            estado_civil: data.estado_civil,
            cedula: data.cedula,
            nacimientodt: data.nacimientodt,
            estado: data.estado
        });
        empleado.save((error, resp) => {
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
    },
    read: (req, res) => {
        var page;
        var item;
        req.params.page ? page = parseInt(req.params.page) : page = 1;
        req.params.item ? item = parseInt(req.params.item) : item = 10;

        var join = [
            { path: "genero", model: "generos" },
            { path: "estado_civil", model: "estados_civiles" },
            { path: "estado", model: "estados" }
        ];
        Db.find()
            .populate(join)
            .exec((error, response) => {
                if (!error) {
                    Db.count((counterError, counter) => {
                        if (counter > 0) {
                            res.status(200).json({
                                titulo: msg.read.success.title,
                                tipo: msg.read.success.type,
                                mensaje: msg.read.success.message,
                                data: response,
                            });
                        } else {
                            res.status(400).json({
                                titulo: msg.read.not_found.title,
                                tipo: msg.read.not_found.type,
                                mensaje: msg.read.not_found.message,
                                data: response
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
        /*
        .paginate(page, item, (error, resp, total) => {
          if (!error) {
            Db.count((counterError, counter) => {
              if (counter > 0) {
                res.status(200).json({
                  titulo: msg.read.success.title,
                  tipo: msg.read.success.type,
                  mensaje: msg.read.success.message,
                  data: resp,
                  pagina: total
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
            
          }
        });*/
    },

    filter: (req, res) => {
        var params = req.body;

        var join = [
            { path: "genero", model: "generos" },
            { path: "estado_civil", model: "estados_civiles" },
            { path: "estado", model: "estados" }
        ];
        Db.find(params)
            .populate(join)
            .exec((error, resp, total) => {
                if (!error) {
                    Db.count((counterError, counter) => {
                        if (counter > 0) {
                            res.status(200).json({
                                titulo: msg.read.success.title,
                                tipo: msg.read.success.type,
                                mensaje: msg.read.success.message,
                                data: resp,
                                pagina: total
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
    }
};