import { render, screen, act } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";



test("act functionality testing", async () => {
  render(<App />);
  userEvent.setup();

  const element = screen.getByRole("textbox");
  await act(async () => {
    await userEvent.type(element, "bubu7");
  })
  expect(screen.getByText("bubu7")).toBeInTheDocument();
})