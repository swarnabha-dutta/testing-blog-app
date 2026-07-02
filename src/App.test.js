import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("OnChange / keyboard Changing", async () => {
  userEvent.setup();
  render(<App />);
  const element = screen.getByRole("textbox");
  await userEvent.type(element, 'bubu');
  expect(screen.getByText('bubu')).toBeInTheDocument();
});