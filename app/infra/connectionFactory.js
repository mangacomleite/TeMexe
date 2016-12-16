var mysql = require( 'mysql' );

var connectMySQL = function() {
  if ( !process.env.NODE_ENV ) {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'teMexe'
    });
  }
};

// Wrapper
module.exports = function() {
  return connectMySQL;
};

exports.connect = connectMySQL;
