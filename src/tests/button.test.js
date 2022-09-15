import React from 'react';
import { render, screen } from '@testing-library/react';

import { NavButton, Button } from '../components/UI/Button';

test('renders button', () => {
  render(
    <NavButton
      children="test"
      className="test"
      link="test"
      active="test"
      onClick={() => {}}
      onMouseDown={() => {}}
    />
  );
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('test');
  expect(button).toHaveClass('test--active');
});

test('renders button', () => {
  render(
    <Button
      children="test"
      className="test"
      onClick={() => {}}
      onMouseDown={() => {}}
    />
  );
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('button');
  expect(button).toHaveClass('test');
});
