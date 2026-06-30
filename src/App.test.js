import { getByLabelText, render, screen } from "@testing-library/react"
import App from "./App"

test('getByLabeltext test Case 1', () => {
  render(<App />);
  const input = screen.getByLabelText("username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("Bubu");
})




// CheckBox Testing


test('getByLabeltext test Case 2', () => {
  render(<App />);
  const checkbox = screen.getByLabelText("Skills");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();

})