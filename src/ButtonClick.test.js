import {render ,screen} from "@testing-library/react";

import { fireEvent } from "@testing-library/react";
import ButtonClick from "./ButtonClick";


test("testing Button Click Event " ,()=>{
    render(<ButtonClick/>);

    const btnElement = screen.getByRole('button',{name:/Update Data/});
    fireEvent.click(btnElement);
    expect(screen.getByText(/updated Data/)).toBeInTheDocument();
}) 