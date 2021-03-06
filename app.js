var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* ******************************************
* PAQUETES ADICIONALES
 ****************************************** */
var uploads = require('express-fileupload');
var bodyParser = require('body-parser');
var fs = require('fs');
var base_path = __dirname;
/* ******************************************
* ARCHIVOS DE RUTAS
 ****************************************** */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var aspectLogin = require("./routes/aspect");

var app = express();
/* ******************************************
* RURA DE LOGS
 ****************************************** */

var logPath = path.join(__dirname + '/public/tmp/logs', 'access.log');
var accessLog = fs.createWriteStream(logPath, {flags: 'a'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(uploads());
//app.use(base_path);

/* ************************************
 * DEFINE HEADERS
 ************************************ */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      //'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Accept-Language,Content-Language',
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin'
  );
  res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
  res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, PUT, DELETE'
  );
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/aspect', aspectLogin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
