var fs = require( 'fs' );
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function(app) {

  app.get( '/problemas', function( request, response ) {
    response.render( 'problems/form' );
  });

  app.post( '/problemas', multipartMiddleware, function( request, response ) {

    var problem = request.body;
    var connection = app.infra.connectionFactory();


    fs.readFile( request.files.name.path, function ( err, data ) {

      let extension = 'jpg';
      if ( request.files.name.type == 'image/png' ) {
        extension = 'png';
      } else if ( request.files.name.type == 'image/jpeg' ) {
        extension = 'jpg';
      }

      var path = "uploads/" + Date.now() + '.' + extension;
      var newPath = __dirname + "/../public/" + path;

      problem.image = path;

      fs.writeFile(newPath, data, function (err) {
        connection.query( 'insert into problems set ?', problem, function( errors, results ) {
          response.redirect( '/' );
        });
      });
    });

  });
};
