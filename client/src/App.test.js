import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getByTestId } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const logo = getByTestId(/app-logo/i);
  expect(logo).toBeInTheDocument();
});
