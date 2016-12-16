module.exports = function( app ) {
  app.get( '/', function( req, res ) {
    var connection = app.infra.connectionFactory();

    res.render( 'home/index' );

    connection.end();
  });
};
