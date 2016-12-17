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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-1.jpg',
        likes: '20',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-1.jpg',
        likes: '11',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Milene Lacerda',
    user: 'milenevlacerda',
    photo: '/img/milene.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-2.jpg',
        like: '30',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-2.jpg',
        likes: '15',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Victor Serpa',
    user: 'victorserpac',
    photo: '/img/victor.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-3.jpg',
        likes: '22',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-3.jpg',
        likes: '40',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Evelyn Lacerda',
    user: 'evelynlacerda',
    photo: '/img/evelyn.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-4.jpg',
        likes: '32',
        type: 'tt'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-4.jpg',
        likes: '5',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Edison Lacerda',
    user: 'edisonlacerda',
    photo: '/img/edison.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-5.jpg',
        likes: '12',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-5.jpg',
        likes: '2',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Keli Vieira',
    user: 'kelivieira',
    photo: '/img/keli.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-6.jpg',
        likes: '28',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-6.jpg',
        likes: '8',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Calebe Micael',
    user: 'calebemicael',
    photo: '/img/calebe.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-7.jpg',
        likes: '50',
        type: 'tt'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-7.jpg',
        likes: '10',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Cleber Fonseca',
    user: 'cleberfonseca',
    photo: '/img/cleber.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-8.jpg',
        likes: '34',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-8.jpg',
        likes: '15',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Mauricio Escobar',
    user: 'mauricioescobar',
    photo: '/img/mauricio.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-9.jpg',
        likes: '45',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-9.jpg',
        likes: '30',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Glederson Santos',
    user: 'gledersonsantos',
    photo: '/img/glederson-10.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem.jpg',
        likes: '35',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-10.jpg',
        likes: '40',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Pablo Werlang',
    user: 'pablowerlang',
    photo: '/img/pablo.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-11.jpg',
        likes: '18',
        type: 'tt'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-11.jpg',
        likes: '27',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Felipe Thomas',
    user: 'felipethomas',
    photo: '/img/felipe.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-12.jpg',
        likes: '19',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-12.jpg',
        likes: '33',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Anelise Kologeski',
    user: 'anelisekologeski',
    photo: '/img/anelise.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-13.jpg',
        likes: '20',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 13',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-13.jpg',
        likes: '44',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Vinicius Guimarães',
    user: 'viniciusguimaraes',
    photo: '/img/vinicius.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-14.jpg',
        likes: '35',
        type: 'insta'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 14',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-14.jpg',
        likes: '33',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Leandro Guedes',
    user: 'leandroguedes',
    photo: '/img/leandro.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-15.jpg',
        likes: '40',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-15.jpg',
        likes: '22',
        type: 'suggestion'
      }
    ]
  });

  user.insert({
    nome: 'Gustavo Igansi',
    user: 'gustavoigansi',
    photo: '/img/gustavo.jpg',
    problems: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/problem-16.jpg',
        likes: '44',
        type: 'fb'
      }
    ],
    suggestions: [
      {
        title: 'Sugestão 16',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non odio aliquid iure tempore doloremque, quibusdam soluta nemo molestiae sunt.',
        image: '/img/suggestion-16.jpg',
        likes: '27',
        type: 'suggestion'
      }
    ]
  });

  db.close();
});
