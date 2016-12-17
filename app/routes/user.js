var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = function( app ) {

  app.get( '/user/:username', function ( req, res ) {

    var username = req.params.username;

    var url = 'mongodb://localhost:27017/mangaComLeite';
    MongoClient.connect( url, function( err, db ) {
      if( err ) { return console.dir( err ); }

      var user = db.collection( 'user' );

      var document = user.findOne({ user: username }, function( err, document ) {
        document.problemsAndSuggestions = document.problems.concat( document.suggestions );

        for ( var i = 0; i < document.problemsAndSuggestions.length; i++ ) {
          console.log( document.problemsAndSuggestions[ i ] );
          if ( document.problemsAndSuggestions[ i ].hasOwnProperty( 'title' ) ) {
            document.problemsAndSuggestions[ i ].type = 'suggestion'
          } else {
            document.problemsAndSuggestions[ i ].type = 'problem'
          }
        }

        res.render('profile', { user: document } );

      });
    });



  });

};
