import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Alert from './Alert';

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
    render(<Alert type="error" />, container);
  });
  expect(
    container.querySelector('.alert')?.classList.contains('alert--error')
  ).toBe(true);

  act(() => {
    render(<Alert className="test-class" />, container);
  });
  expect(
    container.querySelector('.alert')?.classList.contains('test-class')
  ).toBe(true);
});

it('render with text', () => {
  act(() => {
    render(<Alert>Test text</Alert>, container);
  });
  expect(
    container.querySelector('.alert')?.innerHTML.includes('Test text')
  ).toBe(true);
});
