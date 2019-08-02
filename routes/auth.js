var express = require('express');
var app = express.Router();
var controller = require('./../app/controllers/index');


// ***ACCESOS ROUTES

app.post('/acceso/crear',controller.accesoController.create);
app.get('/acceso/listar',controller.accesoController.read);
app.post('/acceso/filtrar',controller.accesoController.filter);
app.put('/acceso/editar/:_id',controller.accesoController.update);
app.delete('/acceso/eliminar/:_id',controller.accesoController.delete);

// ***ROL ROUTES
app.post('/rol/crear',controller.rolController.create);
app.get('/rol/listar',controller.rolController.read);
app.post('/rol/filtrar',controller.rolController.filter);
app.put('/rol/editar/:_id',controller.rolController.update);
app.delete('/rol/eliminar/:_id',controller.rolController.delete);

// ***PERFIL ROUTES
app.post('/perfil/crear',controller.perfilController.create);
app.get('/perfil/listar',controller.perfilController.read);
app.post('/perfil/filtrar',controller.perfilController.filter);
app.put('/perfil/editar/:_id',controller.perfilController.update);
app.delete('/perfil/eliminar/:_id',controller.perfilController.delete);

// ***PERMISO ROUTES
app.post('/permiso/crear',controller.permisoController.create);
app.get('/permiso/listar',controller.permisoController.read);
app.post('/permiso/filtrar',controller.permisoController.filter);
app.put('/permiso/editar/:_id',controller.permisoController.update);
app.delete('/permiso/eliminar/:_id',controller.permisoController.delete);


// autenticacion


module.exports = app;