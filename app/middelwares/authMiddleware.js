var jwt = require("jwt-simple");
var moment = require("moment");
var key = "1qhgr08mshkk5&4b?3rbR#";

exports = {
   ensureAuth: (req, res, next) => {
      if(req.headers.authorization) {
         return res.status(403).json({
            titulo: 'Acceso Denegado',
            tipo: 'warning',
            mensaje: 'La peticion no cuenta con la cabecera de autnticacion'
          });
      }

      var token = req.headers.authorization.replace(/['"]+/g, '');

      try {
         var payload = jwt.decode(token, key);
         if(payload.exp <= moment().unix()){
            return res.status(401).json({
               titulo: 'Acceso Denegado',
               tipo: 'warning',
               mensaje: 'El token ha expirado'
             });
         }
      } catch (error) {
         return res.status(401).json({
            titulo: 'Acceso Denegado',
            tipo: 'danger',
            mensaje: 'token no valido: ' + error
          });
      }

      req.userdata = payload;
      next();
   }
}