import { render, screen } from '@testing-library/react';
import App from "./App";

test('renders learn react link', () => {
  render(<App />); //using index como el render, el error es que el elemento a renderizar no es DOM adentro de REACT.DOM
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
