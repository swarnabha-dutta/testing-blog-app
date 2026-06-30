import { render, screen } from "@testing-library/react";
import App from "./App";
test("btn testing by using getByRole", () => {
  render(<App />);
  const btn1 = screen.getByRole('button', { name: "Click 1" });
  const btn2 = screen.getByRole('button', { name: "Click 2" });
  const inputField1 = screen.getByRole("textbox", { name: /User Input/ });
  const inputField2 = screen.getByRole("textbox", { name: /User page/ });
  const dv1 = screen.getByRole('dummy');
  expect(dv1).toBeInTheDocument()




  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(inputField1).toBeInTheDocument();
  expect(inputField2).toBeInTheDocument();
})