import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';

import Button from './Button';
import userEvent from '@testing-library/user-event';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('render with correct tag', () => {
  act(() => {
    render(<Button href="/">Link</Button>, container);
  });
  expect(container.querySelector('.button')?.tagName).toBe('A');

  act(() => {
    render(<Button>Button</Button>, container);
  });
  expect(container.querySelector('.button')?.tagName).toBe('BUTTON');

  const history = createMemoryHistory();
  act(() => {
    render(
      <Router history={history}>
        <Button to="/test">TestLink</Button>
      </Router>,
      container
    );
  });

  expect(container.querySelector('.button')?.tagName).toBe('A');
  userEvent.click(screen.getByText(/TestLink/i), { button: 0 });
  expect(history.location.pathname).toBe('/test');
});

it('render with props for style button', () => {
  act(() => {
    render(<Button dark />, container);
  });
  expect(
    container.querySelector('.button')?.classList.contains('button--dark')
  ).toBe(true);

  act(() => {
    render(<Button plus>test</Button>, container);
  });
  expect(
    container.querySelector('.button')?.classList.contains('button--plus')
  ).toBe(true);

  act(() => {
    render(<Button active>test</Button>, container);
  });
  expect(
    container.querySelector('.button')?.classList.contains('button--active')
  ).toBe(true);

  act(() => {
    render(<Button className="test-class">test</Button>, container);
  });
  expect(
    container.querySelector('.button')?.classList.contains('test-class')
  ).toBe(true);
});

it('render with correct text', () => {
  act(() => {
    render(<Button>Text</Button>, container);
  });
  expect(container.querySelector('.button')?.textContent).toBe('Text');

  act(() => {
    render(<Button plus>Text</Button>, container);
  });
  expect(container.querySelector('.button')?.textContent).toBe('');
});
