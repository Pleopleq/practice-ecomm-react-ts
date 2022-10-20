import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

it('renders "Hello World!', () => {
  render(<HelloWorld></HelloWorld>);
  const myElement = screen.getByText("Hello World!");

  expect(myElement).toBeInTheDocument();
});
