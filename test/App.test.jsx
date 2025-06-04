import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';
import user from '../src/data/user';

test('renders user name in Home component', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: new RegExp(`${user.name}.*${user.city}`, 'i'),
  });
  expect(heading).toBeInTheDocument();
});
