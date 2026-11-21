import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vimal Balaji portfolio header', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Vimal Balaji/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
