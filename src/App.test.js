import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cover title', () => {
  render(<App />);
  const coverElement = screen.getByText(/be rethought/i);
  expect(coverElement).toBeInTheDocument();
});
