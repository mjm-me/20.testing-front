import { render } from './base';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Given render function', () => {
  describe('When called with valid parameters', () => {
    // Arrange
    const selector = 'body';
    const position: InsertPosition = 'beforeend';
    const template = '<p class="test">Test</p>';
    // caja blanca, la implementación ¿cómo está escrito en JS? aquí si nos podemos meter dentro del componente
    test('Then should render the element', () => {
      // Act
      const element = render(selector, position, template) as HTMLElement; // esto depende de la implementación el JS que nosotros escribimos
      // Assert
      expect(element).toBeInstanceOf(HTMLElement); //sería como un test de caja blanca
      screen.debug(element); // esto es para ver el DOM en el momento que se ejecuta el test
    });

    test('Then should insert the template at the correct position', () => {
      const template = '<h1 class="test">Test</h1>';
      // Act
      render(selector, position, template); // esto depende de la implementación el JS que nosotros escribimos
      // Assert
      const node = screen.getByRole('heading', { name: 'Test' });
      expect(node).toBeInTheDocument();
      expect(node).toHaveClass('test');
      expect(node).toHaveTextContent('Test');
    });
  });
  describe('When called with invalid selector', () => {
    test('Then should throw an error', () => {
      // Arrange
      const selector = '.nonexistent';
      const position: InsertPosition = 'beforeend';
      const template = '<div class="test">Test</div>';
      // Act & Assert
      expect(() => render(selector, position, template)).toThrowError(
        `Element with selector ${selector} not found`,
      );
    });
  });
});
