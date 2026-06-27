import { fireEvent, render, screen } from "@testing-library/react"
import InputForm from "./InputForm"



test("Testing the Input Form",()=>{
    render(<InputForm/>);
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField,{
        target:{value:'a'}
    });
    expect(inputField.value).toBe("A");
});


