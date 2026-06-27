import { screen, render } from "@testing-library/react";
import Login from "./Login";

test("Login Text Check", () => {
  render(<Login />);
  // check for login text
  // const checkText = screen.getByText(/Login/);// fail becasue Login is present in multiple places
  const checkText = screen.getByRole("heading", { name: /Login/ });
  expect(checkText).toBeInTheDocument();
}, 1000);

// check for first input field
test("Check First Input Field", () => {
  render(<Login />);
  const inputElement = screen.getByRole("textbox");
  const inputPlaceHolder = screen.getByPlaceholderText("Enter email");
  expect(inputElement).toBeInTheDocument();
  expect(inputPlaceHolder).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("type", "email");
  expect(inputElement).toHaveAttribute("name", "email");
});



// check for second input field

test("Check Second Input Field", () => {
  render(<Login/>);
  const passwordInput = screen.getByPlaceholderText("Enter password");
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type","password");
  expect(passwordInput).toHaveAttribute("name","password");
});


// check for login button




// ------------------------------------------------ UI Test Cases ---------------------------// 

// skip this group test cases only and run all
describe.skip("UI Testing Group 1",()=>{
    test("Test Case 1 ",()=>{
        render(<Login/>);
        let checkText = screen.getByRole('textbox');
        expect(checkText).toHaveAttribute("type","email");
        expect(checkText).toHaveAttribute("name","email");
        expect(checkText).toBeInTheDocument();
    });


    test("Test Case 2",()=>{
        render(<Login/>);
        let checkPasswordHolder = screen.getByPlaceholderText("Enter password");
        expect(checkPasswordHolder).toHaveAttribute('type','password');
        expect(checkPasswordHolder).toHaveAttribute('name','password');
        expect(checkPasswordHolder).toBeInTheDocument();
    })

});

// only this group test cases will run and all are skipped
describe.only("UI Testing Group 2",()=>{
    test("Test Case 3 ",()=>{
        render(<Login/>);
        let checkText = screen.getByRole('textbox');
        expect(checkText).toHaveAttribute("type","email");
        expect(checkText).toHaveAttribute("name","email");
        expect(checkText).toBeInTheDocument();
    });


    test("Test Case 4",()=>{
        render(<Login/>);
        let checkPasswordHolder = screen.getByPlaceholderText("Enter password");
        expect(checkPasswordHolder).toHaveAttribute('type','password');
        expect(checkPasswordHolder).toHaveAttribute('name','password');
        expect(checkPasswordHolder).toBeInTheDocument();
    })

})


describe("UI Testing Group 3",()=>{
    test("Test Case 5 ",()=>{
        render(<Login/>);
        let checkText = screen.getByRole('textbox');
        expect(checkText).toHaveAttribute("type","email");
        expect(checkText).toHaveAttribute("name","email");
        expect(checkText).toBeInTheDocument();
    });


    test("Test Case 6",()=>{
        render(<Login/>);
        let checkPasswordHolder = screen.getByPlaceholderText("Enter password");
        expect(checkPasswordHolder).toHaveAttribute('type','password');
        expect(checkPasswordHolder).toHaveAttribute('name','password');
        expect(checkPasswordHolder).toBeInTheDocument();
    })

})

describe("UI Testing Group 4",()=>{
    test("Test Case 7 ",()=>{
        render(<Login/>);
        let checkText = screen.getByRole('textbox');
        expect(checkText).toHaveAttribute("type","email");
        expect(checkText).toHaveAttribute("name","email");
        expect(checkText).toBeInTheDocument();
    });


    test("Test Case 8",()=>{
        render(<Login/>);
        let checkPasswordHolder = screen.getByPlaceholderText("Enter password");
        expect(checkPasswordHolder).toHaveAttribute('type','password');
        expect(checkPasswordHolder).toHaveAttribute('name','password');
        expect(checkPasswordHolder).toBeInTheDocument();
    })

});


// Priority Order 
// describe.only() > describe.skip()
