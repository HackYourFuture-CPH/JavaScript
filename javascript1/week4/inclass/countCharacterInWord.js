const word = "happy"

characters = [];
function addCharacter(character){
  characters.push({character:character,count:1})
}

function checkIfExists(character){
  for(let i = 0; i < characters.length; i++){
    // console.log("if exists", i)
    // console.log(characters[i].character)
    // console.log(character)
    if(characters[i].character === character){
      return i;
    }
  }
  return -1;
}

function addToCount(idx){
  characters[idx].count += 1;
}

for(let i = 0; i < word.length; i++){
  const character = word[i];
  const idx = checkIfExists(character);
  if( idx !== -1 ){
    addToCount(idx);
  } else {
    addCharacter(character);
  }
}

console.log(characters);