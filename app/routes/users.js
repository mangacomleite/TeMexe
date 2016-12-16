var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = function( app ) {
  app.get( '/users/create', function( req, res ) {
    // var connection = app.infra.connectionFactory();

    // res.render( 'problems/index' );
    //

    MongoClient.connect( "mongodb://localhost:27017/exampleDb", function( err, db ) {
      if(err) { return console.dir(err); }

      var users = db.collection( 'users' );



      // console.log( users. );

      users.insert({
        'nome': 'Teste',
        'idade': 21
      });

    });

    // connection.end();
  });
};
