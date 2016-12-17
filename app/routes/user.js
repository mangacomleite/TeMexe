var MongoClient = require( 'mongodb' ).MongoClient;


function dataAtualFormatada(){
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

module.exports = function( app ) {

  app.get( '/user/:username', function ( req, res ) {

    var username = req.params.username;

    var url = 'mongodb://localhost:27017/mangaComLeite';
    MongoClient.connect( url, function( err, db ) {
      if( err ) { return console.dir( err ); }

      var user = db.collection( 'user' );
      db.collection( 'user' ).findOne({ user: 'milenevlacerda' }, function( err, userLogado ) {
        user.findOne({ user: username }, function( err, document ) {
          if ( document ) {
            for ( let i = 0; i < document.problems.length; i++ ) {
              document.problems[ i ].dataFormatada = dataAtualFormatada( document.problems[ i ].date );
            }
            for ( let i = 0; i < document.suggestions.length; i++ ) {
              document.suggestions[ i ].dataFormatada = dataAtualFormatada( document.suggestions[ i ].date );
            }

            document.problemsAndSuggestions = document.problems.concat( document.suggestions );
          }


          res.render('profile', {
            user: document,
            userLogado: userLogado,
            routeName: 'user'
          });
        });
      });
    });



  });

};
