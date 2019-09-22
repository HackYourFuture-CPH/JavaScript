const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(title, artist) {
  if (typeof (title) === 'string' && typeof (artist) === 'string' && title && artist) {
    songDatabase.push({
      songId: songDatabase.length + 1,
      title: title,
      artist: artist
    });
  }
}
addSongToDatabase('Ride it', 'Jay Sean');

function addSongToDatabase2(song){
  songDatabase.push(song)
}
// The following is not good
addSongToDatabase2({songId:10, title:'Ride it', artist:'Jay Sean'})
addSongToDatabase2({songId:10, title:'Hello World', artist:'Python'})

console.table(songDatabase);

function getSongByTitle(title) {
  for (let i = 0; i < songDatabase.length; i++) {
    const titleKey = songDatabase[i].title;
    if (titleKey === title) {
      return songDatabase[i];
    }
  }
}

function getSongByTitle2(title) {
  const titles = [];
  for (let i = 0; i < songDatabase.length; i++) {
    titles.push(songDatabase[i].title)
  }
  const idx = titles.indexOf(title);
  return songDatabase[idx];
}
const searchSong = getSongByTitle('Ride it');
console.log(searchSong);