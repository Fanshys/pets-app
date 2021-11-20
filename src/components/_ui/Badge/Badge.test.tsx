import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Badge from './Badge';

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
    render(<Badge name="" color="orange" />, container);
  });
  expect(
    container.querySelector('.badge')?.classList.contains('badge--orange')
  ).toBe(true);

  act(() => {
    render(<Badge name="" color="orange" className="test-class" />, container);
  });
  expect(
    container.querySelector('.badge')?.classList.contains('test-class')
  ).toBe(true);
});
