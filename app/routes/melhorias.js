var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = function(app) {
  app.get( '/melhorias', function( req, res ) {

    let foo = [];
    function getMelhorias(document, callback) {

      if( document ){
        foo = foo.concat( document.suggestions );
      }

    }


    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      db.collection( 'user' ).findOne({ user: 'milenevlacerda' }, function( err, userLogado ) {
        db.collection( 'user' ).find().each(function(err, document){

          if(!document) {
            foo.sort(function(a,b){
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return b.likes - a.likes;
            });

            res.render( 'melhorias', { melhorias: foo, userLogado: userLogado } );
          }
          getMelhorias(document, function(){
            console.log('wow');
          });

        });
      });
    });

  });
};
