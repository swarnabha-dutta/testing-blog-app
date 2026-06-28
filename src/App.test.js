import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("beforeAll");
});

test("Test First React app case 1", () => {
  // test logic here
  render(<App />);
  const pElement = screen.getByText(/First React test case sacsaa14214214/i);
  const pElement2 = screen.getByText(/Swarnabha Dutta/);
  const imgTitle = screen.getByTitle("Iron Man");
  expect(pElement).toBeInTheDocument();
  expect(pElement2).toBeInTheDocument();
  expect(imgTitle).toBeInTheDocument();
}, 1000);

test("Test First React app case 2", () => {
  // test logic here
  render(<App />);
  const pElement = screen.getByText(/First React test case sacsaa14214214/i);
  const pElement2 = screen.getByText(/Swarnabha Dutta/);
  const imgTitle = screen.getByTitle("Iron Man");
  expect(pElement).toBeInTheDocument();
  expect(pElement2).toBeInTheDocument();
  expect(imgTitle).toBeInTheDocument();
}, 1000);

// test for input fields
test("Test Input Fields", () => {
  render(<App />);
  const inputElement = screen.getByRole("textbox");
  const inputPlaceHolder = screen.getByPlaceholderText("Enter the Text")
  expect(inputElement).toBeInTheDocument();
  expect(inputPlaceHolder).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "username");
  expect(inputElement).toHaveAttribute("id", "userId");
  expect(inputElement).toHaveAttribute("type", "text");
  expect(inputElement).toHaveAttribute("value", "swarnabha dutta");
});
