var express = require('express');
var app = express.Router();
var controller = require('./../app/controllers/index');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.status(200).send({
    title: 'API OK',
    message: 'Api home is running ok'
  });
});


module.exports = app;
