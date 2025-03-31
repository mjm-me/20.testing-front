import { createCharacter } from './components/character.js';
import { getCharacters } from './services/repo.js';

const data = await getCharacters();
data.forEach((character) => {
createCharacter('ul', 'beforeend', character);
});

//IFFE
//(async () => {
  //const data = await getCharacters();
  //data.forEach((character) => {
  //createCharacter('ul', 'beforeend', character);
//});

