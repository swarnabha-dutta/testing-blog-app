import { render, screen } from "@testing-library/react"
import App from "./App"

test("get By Role", () => {
  render(<App />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('hello');
  expect(inputField).toBeDisabled();
});