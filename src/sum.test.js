import sum from "./sum.js";


test("testing for sum function " , ()=> {
    let a=10;
    let b = 30;
    let output=40;   
    expect(sum(a,b)).toBe(output);
},0)