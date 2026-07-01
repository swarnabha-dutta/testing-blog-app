import { getByPlaceholderText, getAllByPlaceholderText, render, screen } from "@testing-library/react"
import App from "./App"

// test('getByPlaceholderText  test Case 1', () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText(/enter username/i);
//   // for (let input of inputs) {
//   //   expect(input).toBeInTheDocument();
//   // }
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("bubu");
// })



test('getAllByPlaceholderText test Case 2', () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText(/enter username/i);
  for (let input of inputs) {

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("bubu");
  }


})
