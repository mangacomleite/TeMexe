

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

module.exports = function(app) {
  app.get( '/aceitas', function( req, res ) {
    MongoClient.connect( 'mongodb://localhost:27017/mangaComLeite', function( err, db ) {
      db.collection( 'user' ).findOne({ user: 'milenevlacerda' }, function( err, userLogado ) {

        let suggestions = [];
        db.collection( 'user' ).find().each( function( err, doc ) {

          if ( doc ) {
            for ( let i = 0; i < doc.suggestions.length; i++ ) {
              doc.suggestions[ i ].user = doc;
              doc.suggestions[ i ].dataFormatada = dataAtualFormatada( doc.suggestions[ i ].date );
              suggestions.push( doc.suggestions[ i ] );
            }
          }

          if ( !doc ) {
            suggestions.sort(function(a,b){
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(b.date) - new Date(a.date);
            });

            res.render( 'aceitas', {
              suggestions: suggestions,
              userLogado: userLogado,
              routeName: 'aceitas'
            });
          }

        });
      });
    });
  });
};
