var express = require('express');
var app = express.Router();
var controller = require('./../app/controllers/index');

// AREA ROUTES
app.post('/area/crear',controller.areaController.create);
app.get('/area/listar/:page?/:item?',controller.areaController.read);
app.post('/area/filtrar/:page?/:item?',controller.areaController.filter);
app.put('/area/editar/:_id',controller.areaController.update);
app.delete('/area/eliminar/:_id',controller.areaController.delete);

// CARGO ROUTES
app.post('/cargo/crear',controller.cargoController.create);
app.get('/cargo/listar/:page?/:item?',controller.cargoController.read);
app.post('/cargo/filtrar/:page?/:item?',controller.cargoController.filter);
app.put('/cargo/editar/:_id',controller.cargoController.update);
app.delete('/cargo/eliminar/:_id',controller.cargoController.delete);

// COORDINADOR ROUTES
app.post('/coordinador/crear',controller.coordinadorController.create);
app.get('/coordinador/listar/:page?/:item?',controller.coordinadorController.read);
app.post('/coordinador/filtrar/:page?/:item?',controller.coordinadorController.filter);
app.put('/coordinador/editar/:_id',controller.coordinadorController.update);
app.delete('/coordinador/eliminar/:_id',controller.coordinadorController.delete);

// CORREGIMIENTO ROUTES
app.post('/corregimiento/crear',controller.corregimientoController.create);
app.get('/corregimiento/listar/:page?/:item?',controller.corregimientoController.read);
app.post('/corregimiento/filtrar/:page?/:item?',controller.corregimientoController.filter);
app.put('/corregimiento/editar/:_id',controller.corregimientoController.update);
app.delete('/corregimiento/eliminar/:_id',controller.corregimientoController.delete);

// DIRECCION ROUTES
app.post('/direccion/crear',controller.direccionController.create);
app.get('/direccion/listar',controller.direccionController.read);
app.post('/direccion/filtrar',controller.direccionController.filter);
app.put('/direccion/editar/:_id',controller.direccionController.update);
app.delete('/direccion/eliminar/:_id',controller.direccionController.delete);

// DISTRITO ROUTES
app.post('/distrito/crear',controller.distritoController.create);
app.get('/distrito/listar/:page?/:item?',controller.distritoController.read);
app.post('/distrito/filtrar/:page?/:item?',controller.distritoController.filter);
app.put('/distrito/editar/:_id',controller.distritoController.update);
app.delete('/distrito/eliminar/:_id',controller.distritoController.delete);

// EMPLEADO ROUTES
app.post('/empleado/crear',controller.empleadoController.create);
app.get('/empleado/listar/:page?/:item?',controller.empleadoController.read);
app.post('/empleado/filtrar/:page?/:item?',controller.empleadoController.filter);
app.put('/empleado/editar/:_id',controller.empleadoController.update);
app.delete('/empleado/eliminar/:_id',controller.empleadoController.delete);

// EQUIPO ROUTES
app.post('/equipo/crear',controller.equipoController.create);
app.get('/equipo/listar/:page?/:item?',controller.equipoController.read);
app.post('/equipo/filtrar/:page?/:item?',controller.equipoController.filter);
app.put('/equipo/editar/:_id',controller.equipoController.update);
app.delete('/equipo/eliminar/:_id',controller.equipoController.delete);

// ESTADO ROUTES
app.post('/estado/civil/crear',controller.estadoCivilController.create);
app.get('/estado/civil/listar/:page?/:item?',controller.estadoCivilController.read);
app.post('/estado/civil/filtrar/:page?/:item?',controller.estadoCivilController.filter);
app.put('/estado/civil/editar/:_id',controller.estadoCivilController.update);
app.delete('/estado/civil/eliminar/:_id',controller.estadoCivilController.delete);

// ESTADO ROUTES
app.post('/estado/crear',controller.estadoController.create);
app.get('/estado/listar/:page?/:item?',controller.estadoController.read);
app.post('/estado/filtrar/:page?/:item?',controller.estadoController.filter);
app.put('/estado/editar/:_id',controller.estadoController.update);
app.delete('/estado/eliminar/:_id',controller.estadoController.delete);

// GENERO ROUTES
app.post('/genero/crear',controller.generoController.create);
app.get('/genero/listar/:page?/:item?',controller.generoController.read);
app.post('/genero/filtrar/:page?/:item?',controller.generoController.filter);
app.put('/genero/esitar/:_id',controller.generoController.update);
app.delete('/genero/eliminar/:_id',controller.generoController.delete);

// INF_CONTACTO ROUTES
app.post('/informacion/contacto/crear',controller.infContactoController.create);
app.get('/informacion/contacto/listar',controller.infContactoController.read);
app.post('/informacion/contacto/filtrar',controller.infContactoController.filter);
app.put('/informacion/contacto/editar/:_id',controller.infContactoController.update);
app.delete('/informacion/contacto/eliminar/:_id',controller.infContactoController.delete);

// INF_EMERGENCIA ROUTES
app.post('/informacion/emergencia/crear',controller.infEmergenciaController.create);
app.get('/informacion/emergencia/listar',controller.infEmergenciaController.read);
app.post('/informacion/emergencia/filtrar',controller.infEmergenciaController.filter);
app.put('/informacion/emergencia/editar/:_id',controller.infEmergenciaController.update);
app.delete('/informacion/emergencia/eliminar',controller.infEmergenciaController.delete);

// INF_LABORAL ROUTES
app.post('/informacion/laboral/crear',controller.infLaboralController.create);
app.get('/informacion/laboral/listar',controller.infLaboralController.read);
app.post('/informacion/laboral/filtrar',controller.infLaboralController.filter);
app.put('/informacion/laboral/editar/:_id',controller.infLaboralController.update);
app.delete('/informacion/laboral/eliminar/:_id',controller.infLaboralController.delete);

// INF_MEDICA ROUTES
app.post('/informacion/medica/crear',controller.infMedicaController.create);
app.get('/informacion/medica/listar',controller.infMedicaController.read);
app.post('/informacion/medica/filtrar',controller.infMedicaController.filter);
app.put('/informacion/medica/editar/:_id',controller.infMedicaController.update);
app.delete('/informacion/medica/eliminar/:_id',controller.infMedicaController.delete);

// SALIDA ROUTES
app.post('/salida/crear',controller.salidaController.create);
app.get('/salida/listar',controller.salidaController.read);
app.post('/salida/filtrar',controller.salidaController.filter);
app.put('/salida/editar/:_id',controller.salidaController.update);
app.delete('/salida/eliminar/:_id',controller.salidaController.delete);

// MOTIVO_SALIDA ROUTES
app.post('/motivo/salida/crear',controller.motivoSalidaController.create);
app.get('/motivo/salida/listar',controller.motivoSalidaController.read);
app.post('/motivo/salida/filtrar',controller.motivoSalidaController.filter);
app.put('/motivo/salida/editar/:_id',controller.motivoSalidaController.update);
app.delete('/motivo/salida/eliminar/:_id',controller.motivoSalidaController.delete);

// PROVINCIA ROUTES
app.post('/provincia/crear',controller.provinciaController.create);
app.get('/provincia/listar/:page?/:item?',controller.provinciaController.read);
app.post('/provincia/filtrar/:page?/:item?',controller.provinciaController.filter);
app.put('/provincia/editar/:_id',controller.provinciaController.update);
app.delete('/provincia/eliminar/:_id',controller.provinciaController.delete);

// SUPERVISOR ROUTES
app.post('/supervisor/crear',controller.supervisorController.create);
app.get('/supervisor/listar/:page?/:item?',controller.supervisorController.read);
app.post('/supervisor/filtrar/:page?/:item?',controller.supervisorController.filter);
app.put('/supervisor/editar/:_id',controller.supervisorController.update);
app.delete('/supervisor/eliminar/:_id',controller.supervisorController.delete);

// TIPO_SANGRE ROUTES
app.post('/tipo/sangre/crear',controller.tipoSangreController.create);
app.get('/tipo/sangre/listar/:page?/:item?',controller.tipoSangreController.read);
app.post('/tipo/sangre/filtrar/:page?/:item? ',controller.tipoSangreController.filter);
app.put('/tipo/sangre/editar/:_id',controller.tipoSangreController.update);
app.delete('/tipo/sangre/eliminar/:_id',controller.tipoSangreController.delete);

app.get('/provs/provincia', controller.prov.getProvincia);

module.exports = app;
