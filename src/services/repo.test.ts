import { getCharacters } from './repo.js';
import { vi } from 'vitest';

vi.mock('../data/data.json', () => {
    default:[]
});

describe('Given getCharacters', () => {
  describe('When I run it', () => {
    test('Then it return a data Array', () => {
      // Arrange
      // Act
      const result = await getCharacters();
      //Assert
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0)
    });
  });
});
