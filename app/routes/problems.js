var fs                  = require( 'fs' );
var multipart           = require('connect-multiparty');
var multipartMiddleware = multipart();
var MongoClient         = require( 'mongodb' ).MongoClient;

module.exports = function(app) {

  app.post( '/problemas', multipartMiddleware, function( request, response ) {

    var problem = request.body;

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
      problem.likes = 0;
      problem.type  = 'TeMexe';
      problem.date  = new Date();

      fs.writeFile( newPath, data );

      MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
        if( err ) { return console.dir( err ); }

        var user = db.collection( 'user' );

        user.update(
          { user: 'milenevlacerda' },
          {
            $push: { problems: problem }
          },
          { w: 1 },
          function( err, result ) {
            console.log( 'cadastrado' );
            response.redirect( '/' );
          }
        );

      });
    });

  });
};
