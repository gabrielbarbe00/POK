console.log('This script populates some players and country to your database. Specified database as argument - e.g.: populatedb mongodb+srv://gaby9483:30Flying!@cluster0.kngjtje.mongodb.net/?retryWrites=true&w=majority');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}*/

var async = require('async')
var Joueur = require('./models/joueur')
var Pays = require('./models/pays')
var Coup = require ('./models/coup')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var joueurs = []
var pays = []
var coups =[]

function JoueurCreate(first_name, family_name, number, cb) {
  joueurdetail = {first_name:first_name , family_name: family_name, number:number}
  
  var joueur = new Joueur(joueurdetail);
       
  joueur.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Joueur: ' + joueur);
    joueurs.push(joueur)
    cb(null, joueur)
  }  );
}


function paysCreate(name, couleur, étoiles, cb) {
paysdetail = {name:name, couleur:couleur, étoiles:étoiles}
var pay = new Pays(paysdetail);
       
pay.save(function (err) {
  if (err) {
    cb(err, null)
    return
  }
  console.log('New Pays: ' + pays);
  pays.push(pay)
  cb(null, pay)
}  );
}

function coupCreate (name, cb) {
  coupdetail={name}
  var coup= new Coup(coupdetail)

  coup.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Coup : ' + coup);
    coups.push(coup)
    cb(null, coup)
  }  );
}

function createGenreAuthors(cb) {
    async.series([
        function(callback) {
          JoueurCreate('Zinédine', 'Zidane', 10, callback);
        },
        /*function(callback) {
          authorCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', false, false, callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', '1971-12-16', false, callback);
        },
        function(callback) {
          genreCreate("Fantasy", callback);
        },
        function(callback) {
          genreCreate("Science Fiction", callback);
        },
        function(callback) {
          genreCreate("French Poetry", callback);
        },*/
        ],
        // optional callback
        cb);
}


function createPays(cb) {
    async.parallel([
        function(callback) {
          paysCreate('France', 'Blue', 2, callback);
        },/*
        function(callback) {
          bookCreate("The Wise Man's Fear (The Kingkiller Chronicle, #2)", 'Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.', '9788401352836', authors[0], [genres[0],], callback);
        },
        function(callback) {
          bookCreate("The Slow Regard of Silent Things (Kingkiller Chronicle)", 'Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.', '9780756411336', authors[0], [genres[0],], callback);
        },
        function(callback) {
          bookCreate("Apes and Angels", "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...", '9780765379528', authors[1], [genres[1],], callback);
        },
        function(callback) {
          bookCreate("Death Wave","In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...", '9780765379504', authors[1], [genres[1],], callback);
        },
        function(callback) {
          bookCreate('Test Book 1', 'Summary of test book 1', 'ISBN111111', authors[4], [genres[0],genres[1]], callback);
        },
        function(callback) {
          bookCreate('Test Book 2', 'Summary of test book 2', 'ISBN222222', authors[4], false, callback)
        }*/
        ],
        // optional callback
        cb);
}

function createCoup(cb){
  async.parallel([
    function(callback) {
      coupCreate('Pierre', callback);
    },
    function(callback) {
      coupCreate('Feuille', callback);
    },
    function(callback) {
      coupCreate('Ciseaux', callback);
    },
  ],
  cb);
}

/*function createBookInstances(cb) {
    async.parallel([
        function(callback) {
          bookInstanceCreate(books[0], 'London Gollancz, 2014.', false, 'Available', callback)
        },
        function(callback) {
          bookInstanceCreate(books[1], ' Gollancz, 2011.', false, 'Loaned', callback)
        },
        function(callback) {
          bookInstanceCreate(books[2], ' Gollancz, 2015.', false, false, callback)
        },
        function(callback) {
          bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
        },
        function(callback) {
          bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
        },
        function(callback) {
          bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
        },
        function(callback) {
          bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Available', callback)
        },
        function(callback) {
          bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Maintenance', callback)
        },
        function(callback) {
          bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Loaned', callback)
        },
        function(callback) {
          bookInstanceCreate(books[0], 'Imprint XXX2', false, false, callback)
        },
        function(callback) {
          bookInstanceCreate(books[1], 'Imprint XXX3', false, false, callback)
        }
        ],
        // Optional callback
        cb);
}
*/


async.series([
    createCoup
    //createBookInstances
],
/* Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+bookinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
}*/);
