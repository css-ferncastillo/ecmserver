/**
 * Description
 * @authors Fernando Castillo (ferncastillov@outlook.com)
 * @date    2019-06-17 13:57:08
 * @version 1.0.0
 */

var model = require('../../models/index');
var Db = model.userdata;
var msg = require('../../configs/responses_msg');

// eslint-disable-next-line no-undef
module.exports = {
    create: (req, res) => {
        let data = req.body;
        console.log(data);
        let userdata = new Db({
            inf_empleado: data.inf_empleado,
            inf_contacto: data.inf_contacto,
            inf_emergencia: data.inf_emergencia,
            inf_laboral: data.inf_laboral,
            inf_medica: data.inf_medica,
            inf_salida: data.inf_salida,
            inf_direccion: data.inf_direccion
        });
        console.log(data);
        userdata.save((error, resp) => {
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
        var join = [{
                path: 'inf_empleado',
                model: 'empleados',
                populate: [
                    { path: 'genero', model: 'generos' },
                    { path: 'estado_civil', model: 'estados_civiles' },
                    { path: 'estado', model: 'estados' }
                ]
            },
            { path: 'inf_contacto', model: 'inf_contactos' },
            { path: 'inf_emergencia', model: 'inf_emergencias' },
            {
                path: 'inf_laboral',
                model: 'inf_laborales',
                populate: [
                    { path: 'cargoid', model: 'cargos' },
                    {
                        path: 'equipoid',
                        model: 'equipos',
                        populate: [
                            { path: 'area', model: 'areas' },
                            { path: 'coordinador', model: 'coordinadores' },
                            { path: 'supervisor', model: 'supervisores' }
                        ]
                    }
                ]
            },
            {
                path: 'inf_medica',
                model: 'inf_medicas',
                populate: [{ path: 'tipo_sangre', model: 'tipo_sangres' }]
            },
            {
                path: 'inf_salida',
                model: 'inf_salidas',
                populate: [{ path: 'motivosalida', model: 'motivo_salidas' }]
            },
            {
                path: 'inf_direccion',
                model: 'direcciones',
                populate: [{
                        path: 'provinciaid',
                        model: 'provincias'
                    },
                    {
                        path: 'distritoid',
                        model: 'distritos'
                    },
                    {
                        path: 'corregimientoid',
                        model: 'corregimientos'
                    }
                ]
            }
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
                                data: response
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
    }
};