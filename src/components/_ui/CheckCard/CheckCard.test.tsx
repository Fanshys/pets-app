import { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import image from 'assets/images/pets/dogs.svg';

import CheckCard from './CheckCard';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

const InputWrapper = ({ ...rest }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckCard
      text=""
      checked={checked}
      onChange={() => setChecked(!checked)}
      {...rest}
    />
  );
};

it('render with props for style alert', () => {
  act(() => {
    render(<InputWrapper />, container);
  });
  expect(
    container
      .querySelector('.check-card')
      ?.classList.contains('check-card--active')
  ).toBe(true);

  act(() => {
    render(<CheckCard text="" disabled />, container);
  });
  expect(
    container
      .querySelector('.check-card')
      ?.classList.contains('check-card--disabled')
  ).toBe(true);

  act(() => {
    render(<CheckCard text="" className="test-class" />, container);
  });
  expect(
    container.querySelector('.check-card')?.classList.contains('test-class')
  ).toBe(true);
});

it('render with text', () => {
  act(() => {
    render(<CheckCard text="my input" />, container);
  });
  expect(
    container.querySelector('.check-card')?.innerHTML.includes('my input')
  ).toBe(true);
});

it('render with image', () => {
  act(() => {
    render(<CheckCard text="my input" img={image} />, container);
  });
  expect(!!container.querySelector('.check-card img')).toBe(true);

  act(() => {
    render(<CheckCard text="my input" />, container);
  });
  expect(!container.querySelector('.check-card img')).toBe(true);
});

it('check for changed checked attr', () => {
  act(() => {
    render(<InputWrapper data-testid="input" />, container);
  });
  const input = container.querySelector('input');
  const inputScreen = screen.getByTestId('input');
  expect(input?.checked).toBe(true);

  userEvent.click(inputScreen);
  expect(input?.checked).toBe(false);
});
