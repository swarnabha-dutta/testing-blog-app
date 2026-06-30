import { getAllByLabelText, render, screen } from "@testing-library/react"
import App from "./App"

test('getByLabeltext test Case 1', () => {
  render(<App />);
  const inputs = screen.getAllByLabelText("Username");

  for (let input of inputs) {
    expect(input).toBeInTheDocument();
  }
})
