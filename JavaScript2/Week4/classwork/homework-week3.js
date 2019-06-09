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
  {
    songId: 5,
    title: 'When it is not just enough?',
    artist: 'fake artist',
  },
];

function findCountOfCommonWords(array1, array2) {
  let count = 0;

  for (const word of array1) {
    if (array2.includes(word)) {
      count += 1;
    }
  }
  return count;
}

function fuzzySearchByTitle(query) {
  let bestScore = 0;
  let bestMatch;
  const wordsInQuery = query.split(' ');
  // console.log(wordsInQuery);

  for (const song of songDatabase) {
    const wordsInTitle = song.title.split(' ');
    // console.log('count', findCountOfCommonWords(wordsInQuery, wordsInTitle), wordsInTitle);

    const count = findCountOfCommonWords(wordsInQuery, wordsInTitle);
    console.log(count);
    if (count > bestScore) {
      bestScore = count;
      bestMatch = song;
      // console.log('we have a match', song);
    }
  }

  return bestMatch;

}

function getSongByTitle(query) {
  // for (let i=0; i< songDatabase.length; i++) {
  //   const song = songDatabase[i];
  //   if (song.title === query) {
  //     return song;
  //   }
  // }

  for (const song of songDatabase) {
    if (song.title === query) {
      return song;
    }
  }

  return fuzzySearchByTitle(query);
}

const searchedSong = getSongByTitle('Whe');
console.log(searchedSong);