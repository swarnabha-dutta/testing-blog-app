import {
  getByTestId,
  getAllByTestId,
  render, screen
} from "@testing-library/react"
import App from "./App"

// test('testing with test-id:test Case 1', () => {
//   render(<App />);


//   const divId = screen.getByTestId("div-test-id");
//   expect(divId).toBeInTheDocument();
// })



test('getAllByText test Case 2', () => {
  render(<App />);
  const divIds = screen.getAllByTestId("div-test-id");


  for (let divId of divIds) {
    expect(divId).toBeInTheDocument();
  }
})
