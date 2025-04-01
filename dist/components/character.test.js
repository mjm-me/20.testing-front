import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createCharacter } from './character';
describe('Given createCharacter function', () => {
    describe('When called with valid parameters', () => {
        // Arrange
        const selector = 'body';
        const position = 'beforeend';
        const character = {
            id: 1,
            name: 'TestName',
            family: 'TestFamily',
            age: 30,
            isAlive: true,
            reignYear: 10,
            weapon: 'sword',
            adviseTo: {},
            servesTo: {},
            message: '',
            category: 'king',
        };
        test('Then should render the character', () => {
            // Act
            createCharacter(selector, position, character);
            const element = screen.getByRole('listitem', {
                name: '$(character.id)'
            });
            // Assert
            expect(element).toBeInTheDocument();
        });
    });
});
;
