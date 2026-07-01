import {
  // getByText,
  getAllByText,
  render, screen
} from "@testing-library/react"
import App from "./App"

// test('getByText   test Case 1', () => {
//   render(<App />);


//   const btn = screen.getByText("Login");
//   expect(btn).toBeInTheDocument();
//   // expect(input).toHaveValue("bubu");
// })


// test('getByText   test Case 2', () => {
//   render(<App />);


//   const ptag = screen.getByText("p tag testing");
//   expect(ptag).toBeInTheDocument();
//   // expect(input).toHaveValue("bubu");
// })



test('getAllByText test Case 2', () => {
  render(<App />);
  const pTags = screen.getAllByText("p tag testing");


  for (let pTag of pTags) {
    expect(pTag).toBeInTheDocument();
  }
})
