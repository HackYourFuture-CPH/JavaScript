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
      return true;
    }
  }
  return false;
}

function addToCount(character){
  for(let i = 0; i < characters.length; i++){
    if(characters[i].character === character){
      characters[i].count += 1;
      return;
    }
  }
}

for(let i = 0; i < word.length; i++){
  const character = word[i];
  if( checkIfExists(character) ){
    addToCount(character);
  } else {
    addCharacter(character);
  }
}

console.log(characters);