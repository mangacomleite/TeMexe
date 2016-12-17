var MongoClient = require( 'mongodb' ).MongoClient;
var assert = require( 'assert' );

var getAllCards = function( promAndSug, userLogado, res ) {

  res.render( 'index', {
    promAndSug: promAndSug,
    userLogado: userLogado
  });
};

module.exports = function(app) {
  app.get( '/', function( req, res ) {
    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      if( err ) return console.dir( err );




      db.collection( 'user' ).findOne({ user: 'milenevlacerda' }, function( err, userLogado ) {

        var problems = [];
        var suggestions = [];
        db.collection( 'user' ).find().each( function( err, doc ) {
          console.log( doc );

          if ( doc ) {
            for ( var i = 0; i < doc.problems.length; i++ ) {
              doc.problems[ i ].user    = doc;
              doc.suggestions[ i ].user = doc;

              problems.push( doc.problems[ i ] );
              suggestions.push( doc.suggestions[ i ] );
            }
          }

          if ( !doc ) {
            var promAndSug = problems.concat( suggestions );
            getAllCards( promAndSug, userLogado, res );
            db.close();
          }

        });
      });
    });

  });

};
