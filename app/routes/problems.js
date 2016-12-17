var fs                  = require( 'fs' );
var multipart           = require('connect-multiparty');
var multipartMiddleware = multipart();
var MongoClient         = require( 'mongodb' ).MongoClient;
var assert              = require( 'assert' );



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

      fs.writeFile( newPath );

      var url = 'mongodb://localhost:27017/mangaComLeite';
      MongoClient.connect( url, function( err, db ) {
        if( err ) { return console.dir( err ); }

        var user = db.collection( 'user' );

        user.update(
          { user: 'victorserpac' },
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
