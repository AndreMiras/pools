import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header & footer text', () => {
  const { getAllByText } = render(<App />);
  const elements = getAllByText(/Pools/);
  expect(elements).toHaveLength(3);
  expect(elements[0]).toBeInTheDocument();
});
