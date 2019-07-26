var con = require('../../configs/sql_connect');
var msg = require("../../configs/responses_msg");
var db = con.detail;

module.exports = {
   login: (req, res) => {
      var sql = "SELECT * FROM AgentLoginLogout WHERE CONVERT(DATE, LoginDt) = CONVERT(DATE, GETDATE()) AND LogoutDt is null";
      db.raw(sql)
         
         .then(rows => {
            res.status(200).json({
               titulo: msg.create.success.title,
               tipo: msg.create.success.type,
               mensaje: msg.create.success.message,
               data: rows
             });
         })
         .catch(function(error) {
            // console.log(error);
            res.status(500).json({
               titulo: msg.read.error.title,
               tipo: msg.read.error.type,
               mensaje: msg.read.error.message,
               data: error,
             });
          });
   }
}