var fs                  = require( 'fs' );
var multipart           = require('connect-multiparty');
var multipartMiddleware = multipart();
var MongoClient         = require( 'mongodb' ).MongoClient;
var assert              = require( 'assert' );

module.exports = function(app) {

  app.post( '/sugestoes', multipartMiddleware, function( request, response ) {

    var suggestion = request.body;
    let suggestionPath;

    fs.readFile( request.files.image.path, function ( err, data ) {

      let extension = 'jpg';
      if ( request.files.image.type == 'image/png' ) {
        extension = 'png';
      } else if ( request.files.image.type == 'image/jpeg' ) {
        extension = 'jpg';
      }

      suggestionPath = "uploads/" + Date.now() + '.' + extension;
      var newPath = __dirname + "/../public/" + suggestionPath;

      suggestion.image = suggestionPath;
      suggestion.likes = 0;
      suggestion.type = 'suggestion';
      suggestion.date = new Date();

      fs.writeFile(newPath, data);

      MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
        if( err ) { return console.dir( err ); }

        var user = db.collection( 'user' );

        user.update(
          { user: 'milenevlacerda' },
          {
            $push: { suggestions: suggestion }
          },
          { w: 1 },
          function( err, result ) {
            response.redirect( '/' );
          }
        );

      });
    });

  });
};
