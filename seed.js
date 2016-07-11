// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumsList =[
	{
	artistName: 'dat Old Kanye',
	name: 'The College Dropout',
	releaseDate: '2004, February 10',
	genres: [ 'rap', 'hip hop' ]
	},
	{
	artistName: 'dat New Kanye',
	name: 'The Life of Pablo',
	releaseDate: '2016, Febraury 14',
	genres: [ 'hip hop' ]
	},
	{
	artistName: 'dat always rude Kanye',
	name: 'My Beautiful Dark Twisted Fantasy',
	releaseDate: '2010, November 22',
	genres: [ 'rap', 'hip hop' ]
	},
	{
	artistName: 'dat sweet Kanye',
	name: '808s & Heartbreak',
	releaseDate: '2008, November 24',
	genres: [ 'r&b', 'electropop', 'synthpop' ]
	}
];

db.Album.remove({}, function(err, albums){
  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });
});
