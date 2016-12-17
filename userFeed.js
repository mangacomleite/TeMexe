var MongoClient = require( 'mongodb' ).MongoClient;

var url = 'mongodb://localhost:27017/mangaComLeite';
MongoClient.connect( url, function( err, db ) {
  if( err ) { return console.dir( err ); }

  var user = db.collection( 'user' );

  user.insert({
    nome: 'Paulo Virote',
    user: 'paulovsouza',
    photo: '/img/paulo.jpg',
    problems: [
      {
        description: 'Foobar',
        image: 'uploads/foobar.jpg'
      }
    ],
    suggestions: [
      {
        title: 'suggestion',
        description: 'foobar',
        image: 'uploads/dale.jpg'
      }
    ]
  });

  user.insert({
    nome: 'Milene Lacerda',
    user: 'milenevlacerda',
    photo: '/img/milene.jpg',
    problems: [
      {
        description: 'Foobar',
        image: 'uploads/foobar.jpg'
      }
    ],
    suggestions: [
      {
        title: 'suggestion',
        description: 'foobar',
        image: 'uploads/dale.jpg'
      }
    ]
  });

  user.insert({
    nome: 'Victor Serpa',
    user: 'victorserpac',
    photo: '/img/victor.jpg',
    problems: [
      {
        description: 'Foobar',
        image: 'uploads/foobar.jpg'
      }
    ],
    suggestions: [
      {
        title: 'suggestion',
        description: 'foobar',
        image: 'uploads/dale.jpg'
      }
    ]
  });

  db.close();
});
