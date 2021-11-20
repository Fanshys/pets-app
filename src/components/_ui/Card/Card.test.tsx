import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from './Card';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('render with props for style alert', () => {
  act(() => {
    render(<Card className="test-class" />, container);
  });
  expect(
    container.querySelector('.card')?.classList.contains('test-class')
  ).toBe(true);
});

it('render with text', () => {
  act(() => {
    render(<Card>Test text</Card>, container);
  });
  expect(container.querySelector('.card')?.textContent).toBe('Test text');
});
