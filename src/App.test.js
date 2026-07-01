import {
  getByDisplayValue,
  render, screen
} from "@testing-library/react"
import App from "./App"

test('testing with Assertion Methods ', () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('bubu');
  expect(input).not.toHaveAttribute('id');

})


// test('testing with getByDisplay Value', () => {
//   render(<App />);


//   const textArea = screen.getByDisplayValue("bubu dutta");
//   expect(textArea).toBeInTheDocument();
// })



// test('testing with getByDisplay Value', () => {
//   render(<App />);


//   const textArea = screen.getByDisplayValue("male");
//   expect(textArea).toBeInTheDocument();
// })


// test('getAllByDisplayValue test Case 2', () => {
//   render(<App />);
//   const inputs = screen.getAllByTestId("bubu");


//   for (let input of inputs) {
//     expect(input).toBeInTheDocument();
//   }
// })
