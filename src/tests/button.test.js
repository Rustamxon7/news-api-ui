import React from 'react';
import { render, screen } from '@testing-library/react';

import { NavButton, Button } from '../components/UI/Button';

test('renders button', () => {
  render(
    <NavButton
      className="test"
      link="test"
      active="test"
      onClick={() => {}}
      onMouseDown={() => {}}
    >
      test
    </NavButton>
  );
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('test');
  expect(button).toHaveClass('test--active');
});

test('renders button', () => {
  render(
    <Button
      className="test"
      onClick={() => {}}
      onMouseDown={() => {}}
    >
      test
    </Button>
  );
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('button');
  expect(button).toHaveClass('test');
});
