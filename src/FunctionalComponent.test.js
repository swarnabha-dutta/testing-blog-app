import { render, fireEvent, screen } from "@testing-library/react"
import App from "./App"
import handleOtherMethod from "./helper.js";


test("Method testing case 1 ", () => {
    render(<App />);

    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);

    expect(screen.getByText("hello")).toBeInTheDocument();
});





test("Method testing Case 2 ", () => {
    expect(handleOtherMethod()).toMatch("hi");
})