import { render, screen } from "@testing-library/react";
import App from "./App";

test("Textmatch testing", () => {
  render(<App />);

  const dv1 = screen.getByText((content, element) => content.startsWith("Hello"));
  const dv = screen.getByText((content, element) => content.endsWith("World"));
  const dv2 = screen.getByText((content, element) => content.includes("World"));

  expect(dv1).toBeInTheDocument();
  expect(dv).toBeInTheDocument();
})