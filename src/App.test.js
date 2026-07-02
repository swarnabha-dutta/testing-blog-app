import { render, screen } from "@testing-library/react";
import User from "./User";



test("Understanding of props", () => {
  const name = "bubu";
  render(<User name={name} />);

  const user = screen.getByText(`User Name:${name}`);
  expect(user).toBeInTheDocument();
})