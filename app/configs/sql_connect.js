var knex = require("knex");

module.exports = {
   lookup: knex({
      client: 'mssql',
      connection: {
         host: '10.8.70.30',
         user: 'ccproquery',
         password: 'Concerto',
         database: 'lookup'
      },
      fetchAsString: [ 'number', 'clob', 'date' ],
      pool: { min: 0, max: 7 },
      
   }),
   summary: knex({
      client: 'mssql',
      connection: {
         host: '10.8.70.30',
         user: 'ccproquery',
         password: 'Concerto',
         database: 'summary_epro'
      },
      fetchAsString: [ 'date', 'number', 'clob' ],
      pool: { min: 0, max: 7 }
   }),
   config: knex({
      client: 'mssql',
      connection: {
         host: '10.8.70.24',
         user: 'ccproquery',
         password: 'Concerto',
         database: 'config_epro',
      },
      fetchAsString: [ 'date', 'number', 'clob' ],
      pool: { min: 0, max: 7 }
   }),
   detail: knex({
      client: 'mssql',
      connection: {
         host: '10.8.70.30',
         port: 2188,
         user: 'ccproquery',
         password: 'Concerto',
         database: 'detail_epro',
         charset: 'utf8'
      },
      fetchAsString: [ 'date', 'number', 'clob' ],
      pool: { min: 0, max: 7 }
   })
};