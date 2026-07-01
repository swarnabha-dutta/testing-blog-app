import {
  getByDisplayValue,
  render, screen
} from "@testing-library/react"
import App from "./App"

// test('testing with getByDisplay Value', () => {
//   render(<App />);


//   const input = screen.getByDisplayValue("bubu");
//   expect(input).toBeInTheDocument();
// })


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


test('getAllByDisplayValue test Case 2', () => {
  render(<App />);
  const inputs = screen.getAllByTestId("bubu");


  for (let input of inputs) {
    expect(input).toBeInTheDocument();
  }
})
