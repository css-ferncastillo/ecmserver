var express = require('express');
var app = express.Router();
var controller = require('./../app/controllers/index');

app.get('/login/listar',controller.realtime.login);

module.exports = app;