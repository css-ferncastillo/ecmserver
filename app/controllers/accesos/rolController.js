/**
 * Description
 * @authors Fernando Castillo (ferncastillov@outlook.com)
 * @date    2019-06-17 13:57:08
 * @version 1.0.0
 */

var model = require("../../models/index");
var Db = model.rol;
var msg = require("../../configs/responses_msg");

module.exports = {
  create: (req, res) => {
    let data = req.body;
    let rol = new Db({
      rol: data.rol,
      detalle: data.detalle
    });
    rol.save((error, resp) => {
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
    Db.find((error, resp) => {
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
    Db.find(params, (error, resp) => {
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
  }
};
