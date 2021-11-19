import { render, unmountComponentAtNode } from 'react-dom';
import { act, isElement } from 'react-dom/test-utils';
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
  expect(!!container.querySelector('a')).toBe(true);

  act(() => {
    render(<Button>Button</Button>, container);
  });
  expect(!!container.querySelector('button')).toBe(true);

  const history = createMemoryHistory();
  act(() => {
    render(
      <Router history={history}>
        <Button to="/test">TestLink</Button>
      </Router>,
      container
    );
  });

  userEvent.click(screen.getByText(/TestLink/i), { button: 0 });
  expect(history.location.pathname === '/test').toBe(true);
});
