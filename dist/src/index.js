import { createCharacter } from './components/character.js';
import DATA from '../data/data.json' with { type: 'json' };
const data = DATA;
data.forEach((character) => {
    createCharacter('ul', 'beforeend', character);
});
