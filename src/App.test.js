import { render, screen } from "@testing-library/react";
import App from "./App";

test("findBy Test case", async () => {
  render(<App />);


  const text = await screen.findByText("data is found", {}, { timeout: 16000 });
  expect(text).toBeInTheDocument();
})