var MongoClient = require( 'mongodb' ).MongoClient;
var assert = require( 'assert' );

var getAllCards = function( promAndSug, userLogado, res ) {


  promAndSug.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  res.render( 'index', {
    promAndSug: promAndSug,
    userLogado: userLogado
  });
};

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
              doc.problems[ i ].user             = doc;
              doc.suggestions[ i ].user          = doc;
              doc.problems[ i ].dataFormatada    = dataAtualFormatada( doc.problems[ i ].date );
              doc.suggestions[ i ].dataFormatada = dataAtualFormatada( doc.suggestions[ i ].date );

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
