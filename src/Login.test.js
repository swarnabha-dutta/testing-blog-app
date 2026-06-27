import { screen, render } from "@testing-library/react";
import Login from "./Login";

test("Login Text Check", () => {
  render(<Login />);
  // check for login text
  // const checkText = screen.getByText(/Login/);// fail becasue Login is present in multiple places
  const checkText = screen.getByRole("heading", { name: /Login/ });
  expect(checkText).toBeInTheDocument();
}, 1000);

// check for first input field
test("Check First Input Field", () => {
  render(<Login />);
  const inputElement = screen.getByRole("textbox");
  const inputPlaceHolder = screen.getByPlaceholderText("Enter email");
  expect(inputElement).toBeInTheDocument();
  expect(inputPlaceHolder).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("type", "email");
  expect(inputElement).toHaveAttribute("name", "email");
});



// check for second input field

test("Check Second Input Field", () => {
  render(<Login/>);
  const passwordInput = screen.getByPlaceholderText("Enter password");
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type","password");
  expect(passwordInput).toHaveAttribute("name","password");
});


// check for login button
