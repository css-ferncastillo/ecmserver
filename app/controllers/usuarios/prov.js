var data = require('../../models/data.json');
var msg = require("../../configs/responses_msg");

module.exports = {
   getProvincia: (req, res) => {
      var rest = [];
      data.forEach(element => {
         rest.push( element['name']);
      });

      res.status(200).json({
         titulo: msg.create.success.title,
         tipo: msg.create.success.type,
         mensaje: msg.create.success.message,
         data: rest
       });
   }
}