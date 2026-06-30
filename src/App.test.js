import { render, screen } from "@testing-library/react";
import App from "./App";


test("getAllByRole", () => {
  render(<App />);
  const btns = screen.getAllByRole('button');
  for (let btn of btns) {
    expect(btn).toBeInTheDocument();
  }
})