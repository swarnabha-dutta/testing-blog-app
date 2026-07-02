import { render, screen } from "@testing-library/react";
import App from "./App";

test("queryBy Test case", () => {
  render(<App />);
  // const dv = screen.getByText("Login");
  // expect(dv).toBeInTheDocument();

  const divEl = screen.queryByText("Login");
  expect(divEl).not.toBeInTheDocument();
})