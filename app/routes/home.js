var MongoClient = require( 'mongodb' ).MongoClient;
var assert = require( 'assert' );

var getAllCards = function( problems, suggestions, res ) {
  var all = problems.concat( suggestions );

  res.render( 'index', { promAndSug: all } );
};

module.exports = function(app) {
  app.get( '/', function( req, res ) {
    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      if( err ) return console.dir( err );

      var user = db.collection( 'user' );

      var problems = [];
      var suggestions = [];

      user.find().each( function( err, doc ) {

        if ( doc ) {
          problems    = problems.concat( doc.problems );
          suggestions = suggestions.concat( doc.suggestions );
        }

        if ( !doc ) {
          getAllCards( problems, suggestions, res );
        }

      });

      db.close();
    });

  });

};
