/* eslint-disable no-undef */
var jwt = require("jwt-simple");
var moment = require("moment");
var key = "1qhgr08mshkk5&4b?3rbR#";

module.exports = {
   createToken: (user) => {
      let payload = {
         sub: user.usuario,
         nombre: user.nombre,
         perfil: user.perfil,
         imagen: user.imagen,
         iat: moment().unix(),
         exp: moment().add(30, 'days').unix
      };

      return jwt.encode(payload, key);
   }
}