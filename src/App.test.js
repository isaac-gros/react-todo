import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/todo/i);
  expect(titleElement).toBeInTheDocument();
});
