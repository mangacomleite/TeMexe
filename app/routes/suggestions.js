var fs = require( 'fs' );
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function(app) {

  app.get( '/sugestoes', function( request, response ) {
    response.render( 'suggestions/form' );
  });

  app.post( '/sugestoes', multipartMiddleware, function( request, response ) {

    var suggestion = request.body;
    var connection = app.infra.connectionFactory();

    fs.readFile( request.files.image.path, function ( err, data ) {

      let extension = 'jpg';
      if ( request.files.image.type == 'image/png' ) {
        extension = 'png';
      } else if ( request.files.image.type == 'image/jpeg' ) {
        extension = 'jpg';
      }

      var path = "uploads/" + Date.now() + '.' + extension;
      var newPath = __dirname + "/../public/" + path;

      suggestion.image = path;

      console.log( suggestion );

      fs.writeFile(newPath, data, function (err) {
        connection.query( 'insert into suggestions set ?', suggestion, function( errors, results ) {
          response.redirect( '/' );
        });
      });
    });

    connection.end();

  });
};
