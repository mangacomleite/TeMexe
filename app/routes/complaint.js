module.exports = function(app) {

  app.get( '/reclamacoes', function( request, response ) {
    response.render( 'complaint/form' );
  });

  app.post( '/reclamacoes', function( request, response ) {

    var complaint = request.body;
    var connection = app.infra.connectionFactory();

    console.log( complaint );

    connection.query( 'insert into complaint set ?', complaint, function( errors, results ) {
      console.log( errors );
      response.redirect( '/' );
    });

  });
};
