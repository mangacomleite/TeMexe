var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = function(app) {
  app.get( '/melhorias', function( req, res ) {


    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      db.collection( 'user' ).find();
    });


    res.render( 'melhorias' );

  });
};
