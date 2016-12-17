var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = function(app) {
  app.get( '/dicas', function( req, res ) {
    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      db.collection( 'user' ).findOne({ user: 'milenevlacerda' }, function( err, userLogado ) {
        res.render( 'dicas', { userLogado: userLogado } );
      });
    });
  });
};
