import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createCharacter } from './character';
import { Character } from '../types/character';

describe('Given createCharacter function', () => {
  describe('When called with valid parameters', () => {
    // Arrange

    const selector = 'body';
    const position: InsertPosition = 'beforeend';
    const character = {
      id: 1,
      name: 'TestName',
      family: 'TestFamily',
      age: 30,
      isAlive: true,
      reignYear: 10,
      weapon: 'sword',
      adviseTo: {} as Character,
      servesTo: {} as Character,
      message: '',
      category: 'king',
    } as Character;


    test('Then should render the character', () => {
      // Act
      createCharacter(selector, position, character);
      const element = screen.getByRole('listitem', {
        name: '$(character.id)'
      })
      // Assert
      expect(element).toBeInTheDocument();
      );
    });
  });
});